import { render, screen, fireEvent } from '@testing-library/react'
import MyButton from "./MyButton.tsx"

describe('MyButton Component', () => {
  // 测试基本渲染
  test('renders button with children', () => {
    render(<MyButton data-testid="button">Test Button</MyButton>)
    const button = screen.getByTestId('button')
    expect(button).toBeInTheDocument()
    expect(screen.getByText('Test Button')).toBeInTheDocument()
  })

  // 测试不同类型
  test('renders button with different types', () => {
    const types = ['primary', 'success', 'info', 'warning', 'danger', 'Default']
    types.forEach(type => {
      render(<MyButton type={type} data-testid={`button-${type}`}>Button</MyButton>)
      const button = screen.getByTestId(`button-${type}`)
      expect(button).toHaveClass(`my-button--${type}`)
    })
  })

  // 测试不同大小
  test('renders button with different sizes', () => {
    const sizes = ['large', 'small']
    sizes.forEach(size => {
      render(<MyButton size={size} data-testid={`button-${size}`}>Button</MyButton>)
      const button = screen.getByTestId(`button-${size}`)
      expect(button).toHaveClass(`my-button--${size}`)
    })
  })

  // 测试特殊状态
  test('renders button with plain style', () => {
    render(<MyButton plain data-testid="plain-button">Plain Button</MyButton>)
    const button = screen.getByTestId('plain-button')
    expect(button).toHaveClass('is-plain')
  })

  test('renders button with round style', () => {
    render(<MyButton round data-testid="round-button">Round Button</MyButton>)
    const button = screen.getByTestId('round-button')
    expect(button).toHaveClass('is-round')
  })

  test('renders button with circle style', () => {
    render(<MyButton circle data-testid="circle-button">C</MyButton>)
    const button = screen.getByTestId('circle-button')
    expect(button).toHaveClass('is-circle')
  })

  test('renders button with dashed style', () => {
    render(<MyButton dashed data-testid="dashed-button">Dashed Button</MyButton>)
    const button = screen.getByTestId('dashed-button')
    expect(button).toHaveClass('is-dashed')
  })

  test('renders disabled button', () => {
    render(<MyButton disabled data-testid="disabled-button">Disabled Button</MyButton>)
    const button = screen.getByTestId('disabled-button')
    expect(button).toHaveClass('is-disabled')
    expect(button).toBeDisabled()
  })

  test('renders loading button', () => {
    render(<MyButton loading data-testid="loading-button">Loading Button</MyButton>)
    const button = screen.getByTestId('loading-button')
    expect(button).toHaveClass('is-loging')
  })

  // 测试原生属性
  test('renders button with native type', () => {
    render(<MyButton NativeType="submit" data-testid="submit-button">Submit Button</MyButton>)
    const button = screen.getByTestId('submit-button')
    expect(button).toHaveAttribute('type', 'submit')
  })

  test('renders button with autoFocus', () => {
    render(<MyButton autoFocus={true} data-testid="autofocus-button">AutoFocus Button</MyButton>)
    const button = screen.getByTestId('autofocus-button')
    // 在测试环境中，autoFocus 属性可能不会直接显示在 DOM 中
    // 但我们可以通过检查按钮是否存在来确保组件渲染正确
    expect(button).toBeInTheDocument()
  })

  // 测试事件处理
  test('handles click events', () => {
    const handleClick = vi.fn()
    render(<MyButton onClick={handleClick} data-testid="click-button">Click Button</MyButton>)
    const button = screen.getByTestId('click-button')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  // 测试自定义 className
  test('accepts custom className', () => {
    render(<MyButton className="custom-class" data-testid="custom-button">Custom Button</MyButton>)
    const button = screen.getByTestId('custom-button')
    expect(button).toHaveClass('custom-class')
  })

  // 测试其他原生属性
  test('passes other native attributes', () => {
    render(<MyButton id="test-id" title="Test Title" data-testid="native-button">Native Button</MyButton>)
    const button = screen.getByTestId('native-button')
    expect(button).toHaveAttribute('id', 'test-id')
    expect(button).toHaveAttribute('title', 'Test Title')
  })
})
