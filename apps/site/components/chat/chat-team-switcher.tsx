'use client';

import { useState } from 'react';

import { NavTeam } from '@/components/navigation';

import type { TeamType } from '@/types';
import type { FC } from 'react';

type ChatTeamSwitcherProps = {
  data: Array<TeamType>;
};

export const ChatTeamSwitcher: FC<ChatTeamSwitcherProps> = ({ data }) => {
  const [currentTeam] = useState<TeamType>(data[0]);

  return <NavTeam title={currentTeam.name} subhead={currentTeam.plan} />;
};
