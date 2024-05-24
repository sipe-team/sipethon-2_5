import styled from '@emotion/styled'

import { IconName, icons } from '@/components'
import { ColorKey } from '@/foundations'

export interface SvgProps {
  width: number
  height: number
  color: ColorKey
}

export interface IconProps {
  name: IconName
  size?: number
  color?: ColorKey
}

const Icon = ({ name, size = 20, color = 'neutral1100' }: IconProps) => {
  return (
    <Container>
      <Svg as={icons[name]} width={size} height={size} color={color} />
    </Container>
  )
}

export default Icon

const Container = styled.div`
  display: inline-flex;
  align-items: center;
`

const Svg = styled.svg<{
  color: ColorKey
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ color = 'neutral1100', theme }) => theme.color[color]};
`
