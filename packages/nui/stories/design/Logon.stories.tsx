import type { Meta, StoryFn } from 'storybook-react-rsbuild';
import { Logon } from '#ui/icons';

export default {
  title: 'Design System/Logo',
} as Meta;

export const Logo: StoryFn = () => {
  return (
    <div className="bg-background flex aspect-square items-center justify-center rounded-full">
      <Logon className="text-fluo-logo" width={240} height={240} />
    </div>
  );
};
