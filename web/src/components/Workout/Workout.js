import { Avatar, Box, Flex, Icon, Text, Tooltip } from '@chakra-ui/react'
import { useState } from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'

import { ActivityIcon } from '../ActivityIcon'

export function Workout({ status, activity, title, onClick }) {
  const [hovered, setHovered] = useState(false)

  const statusTheme = statusThemes[status || 'UPCOMING']

  const borderColor = hovered ? statusTheme.hoverBorderColor : 'none'

  return (
    <Flex
      flexDirection="column"
      borderRadius={2}
      bg={statusTheme.bg}
      py={1}
      px={2}
      onClick={onClick}
      boxShadow="md"
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      borderColor={borderColor}
      borderWidth={1}
    >
      <Flex flexDirection="column" alignItems="center" pt={2}>
        <Avatar
          bg="white"
          width="8"
          height="8"
          icon={
            <ActivityIcon activity={activity} color={statusTheme.iconColor} />
          }
        />
        {statusTheme.icon ? (
          <Avatar
            bg="white"
            width="4"
            height="4"
            mt={-2}
            ml={6}
            borderColor={statusTheme.iconColor}
            showBorder
            icon={
              <Icon
                as={statusTheme.icon}
                color={statusTheme.iconColor}
                width="2"
              />
            }
          />
        ) : (
          <Box height={2} />
        )}
      </Flex>
      <Tooltip label={title}>
        <Text
          color={statusTheme.textColor}
          fontSize="xs"
          textAlign="center"
          px={1}
          my={1}
          isTruncated
          noOfLines={1}
        >
          {title || ''}
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
    hoverBorderColor: 'gray.400',
  },
  COMPLETED: {
    bg: 'green.100',
    iconColor: 'green.700',
    textColor: 'green.500',
    icon: FaCheck,
    hoverBorderColor: 'green.300',
  },
  MISSED: {
    bg: 'red.100',
    iconColor: 'red.700',
    textColor: 'red.400',
    icon: FaTimes,
    hoverBorderColor: 'red.300',
  },
}
