import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cropper from "react-easy-crop";
import { toast } from "react-toastify";
import { type Area } from "react-easy-crop";
import { useGetUserQuery, useLogoutMutation } from "@/features/auth/authApi";
import { useUploadImageMutation } from "@/features/user/userApi";
import { getCroppedImg } from "../../utils";
import { UserAvatar } from "./UserAvatar";
import { SocialLinks } from "./SocialLinks";
import RankCard from "./RankCard";
import { SettingsMenu } from "./SettingsMenu";

export const Profile = () => {
  const navigate = useNavigate();
  const { data: user } = useGetUserQuery({});
  const [logout, { isSuccess }] = useLogoutMutation();
  const [uploadImage] = useUploadImageMutation();

  const [showCropModal, setShowCropModal] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);

  const handleLogout = async (): Promise<void> => {
    await logout({});
    if (isSuccess) {
      toast.success("Logged out");
      navigate("/");
    }
  };

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setImageSrc(reader.result);
        setShowCropModal(true);
      }
    };
  };

  const onCropComplete = useCallback((_: any, pixels: Area): void => {
    setCroppedAreaPixels(pixels);
  }, []);

  const handleCropAndUpload = async (): Promise<void> => {
    if (!imageSrc || !croppedAreaPixels) return;

    const blob = await getCroppedImg(imageSrc, croppedAreaPixels);

    if (blob instanceof Blob) {
      const formData = new FormData();
      formData.append("image", blob, "cropped.jpg"); // optional filename
      await uploadImage(formData);
      setShowCropModal(false);
    } else {
      console.error("Cropped image is not a Blob:", blob);
    }
  };

  // Rank Logic
  const userPoints = 610;
  const totalPoints = 800;
  const progress = (userPoints / totalPoints) * 100;

  type RankType =
    | "Rookie"
    | "Bronze"
    | "Silver"
    | "Gold"
    | "Platinum"
    | "Maxed";
  const getRankData = (points: number): [RankType, RankType] => {
    if (points > 600) return ["Platinum", "Maxed"];
    if (points > 599) return ["Gold", "Platinum"];
    if (points > 399) return ["Silver", "Gold"];
    if (points > 199) return ["Bronze", "Silver"];
    return ["Rookie", "Bronze"];
  };
  const [rank, nextRank] = getRankData(userPoints);

  const rankBarColors: Record<RankType, string> = {
    Rookie: "bg-gray-300",
    Bronze: "bg-[#CD7F32]",
    Silver: "bg-[#C0C0C0]",
    Gold: "bg-[#FFD700]",
    Platinum: "bg-[#F0E9D8]",
    Maxed: "bg-green-600",
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-100 via-pink-200 to-white text-purple-800 pt-20'>
      <div className='flex flex-col items-center gap-10 max-w-6xl mx-auto px-6'>
        <UserAvatar user={user} onUpload={handleUploadImage} />

        <h1 className='text-4xl font-bold capitalize'>{user?.username}</h1>
        <SocialLinks />

        <RankCard
          rank={rank}
          nextRank={nextRank}
          userPoints={userPoints}
          totalPoints={totalPoints}
          rankColors={rankBarColors}
          progress={progress}
          currentBarColor={rankBarColors[rank]}
          nextBarColor={rankBarColors[nextRank]}
        />
      </div>

      {/* Settings Toggle */}
      <div className='fixed top-24 right-6 z-50'>
        <span
          className='text-3xl cursor-pointer hover:scale-110 transition'
          onClick={() => setSettingsOpen((prev) => !prev)}
        >
          ⋮
        </span>
        <SettingsMenu
          isOpen={settingsOpen}
          onClose={() => setSettingsOpen(false)}
          onLogout={handleLogout}
        />
      </div>

      {/* Crop Modal */}
      {showCropModal && (
        <div className='fixed inset-0 bg-black bg-opacity-70 z-[999] flex items-center justify-center'>
          <div className='bg-white p-6 rounded-xl w-[90vw] max-w-md h-[400px] relative'>
            <Cropper
              image={imageSrc || ""}
              crop={crop}
              zoom={zoom}
              aspect={1}
              cropShape='round'
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
            <div className='absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-4'>
              <button
                onClick={() => setShowCropModal(false)}
                className='px-4 py-2 bg-gray-500 text-white rounded'
              >
                Cancel
              </button>
              <button
                onClick={handleCropAndUpload}
                className='px-4 py-2 bg-purple-600 text-white rounded'
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
