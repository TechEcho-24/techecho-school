export const setItem = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  // Function to get an item from localStorage
  export const getItem = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };
  
  // Function to remove an item from localStorage
  export const removeItem = (key: string) => {
    localStorage.removeItem(key);
  };
  
  export interface PixelCrop {
    x: number;
    y: number;
    width: number;
    height: number;
  }
  
  export const getCroppedImg = (imageSrc: string, pixelCrop: PixelCrop) => {
    return new Promise((resolve) => {
      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
  
        const size = Math.max(pixelCrop.width, pixelCrop.height);
        canvas.width = size;
        canvas.height = size;
  
        if (!ctx) {
          resolve(null);
          return;
        }
  
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
        ctx.clip();
  
        ctx.drawImage(
          image,
          pixelCrop.x,
          pixelCrop.y,
          pixelCrop.width,
          pixelCrop.height,
          0,
          0,
          size,
          size
        );
  
        canvas.toBlob((blob) => {
          resolve(blob);
        }, "image/jpeg");
      };
    });
  };
  