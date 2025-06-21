import {
    faGithub,
    faLinkedin,
    faXTwitter,
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { useCallback, useEffect, useState } from "react";
  
  import { toast } from "react-toastify";
  import { useNavigate } from "react-router-dom";
  import {
    faArrowRightFromBracket,
    faEllipsisVertical,
    faGear,
    faPen,
  } from "@fortawesome/free-solid-svg-icons";
  import { useDispatch, useSelector } from "react-redux";
  import { getAuthUser, logoutUser } from "../../features/auth/authSlice";
  import { uploadImage } from "../../features/user/userSlice";
  import Cropper from "react-easy-crop";
  import { getCroppedImg } from "../../../utils"; // adjust path if needed
  import RankCard from "./RankCard";
  
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/tech-echo-bb9793325/",
      icon: faGithub,
    },
    {
      href: "https://www.instagram.com/techecho_2024",
      icon: faLinkedin,
    },
    {
      href: "https://x.com/AnujSachan07",
      icon: faXTwitter,
    },
  ];
  
  const SocialLinks = () => (
    <div className='flex justify-between items-center w-52 text-4xl my-8 text-white text-center'>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className={`hover:scale-75 rounded-2xl transition-transform duration-300 p-2`}
        >
          <FontAwesomeIcon icon={link.icon} />
        </a>
      ))}
    </div>
  );
  
  const totalPoints = 800;
  const userPoints = 610; // dynamically fetch this
  let rank = "Rookie";
  let nextRank = "Bronze";
  let progress = (userPoints / totalPoints) * 100;
  
  if (userPoints > 600) {
    rank = "Platinum";
    nextRank = "Maxed";
  } else if (userPoints > 599) {
    rank = "Gold";
    nextRank = "Platinum";
  } else if (userPoints > 399) {
    rank = "Silver";
    nextRank = "Gold";
  } else if (userPoints > 199) {
    rank = "Bronze";
    nextRank = "Silver";
  }
  
  // Optional emoji/icon per rank
  const rankColors = {
    Bronze: "text-[#CD7F32]  border-[#CD7F32]",
    Rookie: "text-gray-400 border-gray-300",
    Silver: "text-[#C0C0C0] border-[#C0C0C0]",
    Gold: "text-[#FFD700] border-[#FFD700]",
    Platinum: "text-[#F0E9D8] border-[#F0E9D8]",
    Maxed: "text-green-600 border-green-600",
  };
  const rankBarColors = {
    Bronze: "bg-[#CD7F32]",
    Rookie: "bg-gray-300",
    Silver: "bg-[#C0C0C0]",
    Gold: "bg-[#FFD700]",
    Platinum: "bg-[#F0E9D8]",
    Maxed: "bg-green-600",
  };
  const currentBarColor = rankBarColors[rank] || "bg-gray-400";
  const nextBarColor = nextRank ? rankBarColors[nextRank] : "bg-green-600";
  export const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { loading } = useSelector((state) => state.user);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [showCropModal, setShowCropModal] = useState(false);
  
    const handleLogout = () => {
      dispatch(logoutUser());
      toast.success("Logged out");
      // navigate("/");
    };
  
    // useEffect to load user data
    useEffect(() => {
      dispatch(getAuthUser());
    }, [dispatch, loading]);
  
    const handleUploadImage = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageSrc(reader.result);
        setShowCropModal(true);
      };
    };
  
    const onCropComplete = useCallback((_, croppedPixels) => {
      setCroppedAreaPixels(croppedPixels);
    }, []);
  
    const handleCropAndUpload = async () => {
      const croppedBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
      dispatch(uploadImage(croppedBlob));
      setShowCropModal(false);
    };
  
    return (
      <div className='pt-24 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative'>
        {/* Header with Profile Picture */}
        <div className='relative h-72 bg-[url(/assets/career/profile-bg.png)] bg-no-repeat bg-cover shadow-md rounded-b-3xl flex justify-center items-end'>
          <div className='relative -mb-20 w-40 h-40 md:w-56 md:h-56 border-4 border-white rounded-full shadow-xl bg-white'>
            {loading ? (
              <div className='w-full h-full flex items-center justify-center bg-gray-100'>
                <div className='btn-loader'></div>
              </div>
            ) : (
              <img
                src={user?.avatar || "/assets/about/user.webp"}
                alt='User'
                className='object-cover w-full h-full rounded-full'
              />
            )}
  
            {/* Edit Button */}
            <label
              htmlFor='image'
              className='absolute md:right-2 md:bottom-2 right-0 bottom-1 z-10 '
            >
              <FontAwesomeIcon
                icon={faPen}
                className='text-blue-600 bg-white hover:bg-blue-600 hover:text-white border border-blue-600 rounded-full p-3 transition'
              />
            </label>
            <input
              type='file'
              id='image'
              accept='image/*'
              hidden
              onChange={handleUploadImage}
            />
          </div>
        </div>
  
        {/* Profile Info and Progress */}
        <div className='max-w-6xl mx-auto px-6 mt-32 md:mt-40 flex flex-col md:flex-row justify-between items-center gap-10'>
          {/* User Info */}
          <div className='text-center md:text-left basis-1/3'>
            <h1 className='text-3xl md:text-4xl font-bold capitalize'>
              {user?.username}
            </h1>
            <div className='mt-4'>
              <SocialLinks />
            </div>
          </div>
  
          {/* Progress Card */}
          <div className='basis-2/3 flex justify-center'>
            <RankCard
              rank={rank}
              nextRank={nextRank}
              userPoints={userPoints}
              totalPoints={totalPoints}
              progress={progress}
              rankColors={rankColors}
              currentBarColor={currentBarColor}
              nextBarColor={nextBarColor}
            />
          </div>
        </div>
  
        {/* Settings Button */}
        <div className='fixed top-28 right-6 md:right-10 z-50'>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            onClick={() => setIsDialogOpen(!isDialogOpen)}
            className='text-white text-3xl cursor-pointer hover:scale-110 transition'
          />
          {isDialogOpen && (
            <div className='absolute top-12 right-0 w-56 bg-white text-black rounded-lg shadow-xl z-50 p-4'>
              <div className='flex justify-end'>
                <span
                  onClick={() => setIsDialogOpen(false)}
                  className='text-xl text-red-500 hover:text-red-700 cursor-pointer'
                >
                  ✕
                </span>
              </div>
              <div className='mt-2 space-y-4'>
                <div className='flex items-center justify-between cursor-pointer hover:text-blue-500 transition'>
                  Settings <FontAwesomeIcon icon={faGear} />
                </div>
                <hr className='border-gray-300' />
                <div
                  onClick={handleLogout}
                  className='flex items-center justify-between cursor-pointer hover:text-blue-500 transition'
                >
                  Logout <FontAwesomeIcon icon={faArrowRightFromBracket} />
                </div>
              </div>
            </div>
          )}
        </div>
  
        {/* Crop Modal */}
        {showCropModal && (
          <div className='fixed inset-0 bg-black bg-opacity-70 z-[999] flex items-center justify-center'>
            <div className='bg-white p-6 rounded-xl w-[90vw] max-w-md h-[400px] relative'>
              <Cropper
                image={imageSrc}
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
                  className='px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded'
                >
                  Cancel
                </button>
                <button
                  onClick={handleCropAndUpload}
                  className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded'
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
  