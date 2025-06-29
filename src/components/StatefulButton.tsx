import { Button } from "./ui/stateful-button";

export const StatefulButton = (isLoading: boolean, value: string) => {
  const handleClick = () => {
    isLoading = true;
    setTimeout(() => {
      isLoading = false;
    }, 2000);
  };
  // if (isLoading) {
  //     return (
  //     <div className="flex h-40 w-full items-center justify-center">
  //         <Button className="loader">Loading...</Button>
  //     </div>
  //     );
  // }
  return (
    <div className='flex h-40 w-full items-center justify-center'>
      <Button type='submit' value={value} onClick={handleClick}>
        Send message
      </Button>
    </div>
  );
};
