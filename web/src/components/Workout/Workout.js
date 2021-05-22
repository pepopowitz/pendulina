import { Avatar, Flex, Icon, Text, Tooltip } from '@chakra-ui/react'
import {
  FaRegTimesCircle,
  FaRegQuestionCircle,
  FaRegCheckCircle,
  FaCheck,
  FaQuestion,
  FaTimes,
} from 'react-icons/fa'

import { ActivityIcon } from '../ActivityIcon'

export function Workout({ status, activity, title, onClick }) {
  const statusTheme = statusThemes[status || 'UPCOMING']
  console.log(status, statusTheme)
  return (
    <Flex
      flexDirection="column"
      borderRadius="20px"
      bg={statusTheme.bg}
      height="60px"
      p={1}
      onClick={onClick}
      boxShadow="md"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Avatar
          bg="white"
          width="8"
          height="8"
          icon={
            <ActivityIcon activity={activity} color={statusTheme.iconColor} />
          }
          borderColor={statusTheme.iconColor}
          showBorder
        />
        <Avatar
          bg="white"
          width="6"
          height="6"
          icon={
            <Icon
              as={statusTheme.icon2}
              color={statusTheme.iconColor}
              width="3"
            />
          }
          showBorder
        />
      </Flex>
      <Tooltip label={title}>
        <Text
          color={statusTheme.textColor}
          fontSize="xs"
          textAlign="center"
          px={1}
          isTruncated
          noOfLines={1}
        >
          {title}
        </Text>
      </Tooltip>
    </Flex>
  )
}

const statusThemes = {
  UPCOMING: {
    bg: 'gray.200',
    iconColor: 'gray.500',
    textColor: 'gray.500',
    icon: FaRegQuestionCircle,
    icon2: FaQuestion,
  },
  COMPLETED: {
    bg: 'green.100',
    iconColor: 'green.700',
    textColor: 'green.500',
    icon: FaRegCheckCircle,
    icon2: FaCheck,
  },
  MISSED: {
    bg: 'red.100',
    iconColor: 'red.700',
    textColor: 'red.400',
    icon: FaRegTimesCircle,
    icon2: FaTimes,
  },
}
