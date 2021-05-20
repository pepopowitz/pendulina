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

export const ActivityIcon = ({ activity, color = 'gray.500' }) => {
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
