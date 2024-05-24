import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Icon, IconName, Text } from '@/components'
import { ColorKey } from '@/foundations/color/color'

interface ButtonProps {
  type?: 'neutral' | 'primary'
  icon?: IconName
  size?: 'M' | 'L'
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
}

const buttonColor: Record<
  'neutral' | 'primary',
  {
    color: ColorKey
    disabledColor: ColorKey
    background: ColorKey
    disabledBackground: ColorKey
  }
> = {
  neutral: {
    color: 'neutral900',
    disabledColor: 'neutral400',
    background: 'neutral200',
    disabledBackground: 'neutral200',
  },
  primary: {
    color: 'neutral0',
    disabledColor: 'primary100',
    background: 'primary500',
    disabledBackground: 'primary300',
  },
}

const Button = ({ type = 'neutral', icon, disabled = false, size = 'M', onClick, children }: ButtonProps) => {
  return (
    <Container type={type} onClick={onClick} disabled={disabled} size={size}>
      {icon && (
        <Icon name={icon} size={20} color={disabled ? buttonColor[type].disabledColor : buttonColor[type].color} />
      )}

      <Text name="subhead" color={disabled ? buttonColor[type].disabledColor : buttonColor[type].color}>
        {children}
      </Text>
    </Container>
  )
}

export default Button

const Container = styled.button<{
  type: 'neutral' | 'primary'
  disabled: boolean
  size: 'M' | 'L'
}>`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ size }) => (size === 'M' ? 54 : 62)}px;
  background: ${({ type, disabled }) =>
    disabled ? buttonColor[type].disabledBackground : buttonColor[type].background};
  border: none;
  border-radius: 8px;
`
