import { Button } from "./ui/stateful-button";

export const StatefulButton = (value: string) => {
  return (
    <div className='flex h-40 w-full items-center justify-center'>
      <Button type='submit' value={value}>
        Send message
      </Button>
    </div>
  );
};
