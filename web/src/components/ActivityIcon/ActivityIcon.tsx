import { Icon } from '@chakra-ui/react'
import {
  FaBiking,
  FaWeightHanging,
  FaOm,
  FaRegCalendarAlt,
  FaRunning,
  FaSwimmer,
  FaTrophy,
} from 'react-icons/fa'

interface ActivityIconProps {
  activity: {
    name: string
  }
  color: string
}

export const ActivityIcon = ({
  activity,
  color = 'gray.500',
}: ActivityIconProps) => {
  const activityTheme = activityThemes[activity.name]
  return <Icon as={activityTheme.icon} color={color} />
}

const activityThemes = {
  Cycling: {
    icon: FaBiking,
  },
  Event: {
    icon: FaRegCalendarAlt,
  },
  Triathlon: {
    icon: FaTrophy,
  },
  Running: {
    icon: FaRunning,
  },
  Strength: {
    icon: FaWeightHanging,
  },
  Swimming: {
    icon: FaSwimmer,
  },
  Yoga: {
    icon: FaOm,
  },
}
