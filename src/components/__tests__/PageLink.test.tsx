import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import PageLink, { Props } from '../PageLink';

describe('<PageLink />', () => {
  const renderComponent = ({ children, ...props }: Props) =>
    render(<PageLink {...props}>{children}</PageLink>);

  it('should render anchor element by default', () => {
    const text = faker.lorem.sentence();
    const href = faker.internet.url();

    renderComponent({ href, children: text });

    const el = screen.queryByText(text);

    expect(el?.tagName).toBe('A');
    expect(el).toHaveAttribute('href', href);
    expect(el).not.toHaveAttribute('aria-current');
  });

  it('should accept className props', () => {
    const text = faker.lorem.sentence();
    const className = faker.word.noun();

    renderComponent({ className, children: text });

    const el = screen.queryByText(text);

    expect(el).toHaveClass(className);
    expect(el).not.toHaveClass('active disabled');
  });

  it('should accept active props', () => {
    const text = faker.lorem.sentence();

    renderComponent({ children: text, active: true });

    const el = screen.queryByText(text);

    expect(el).toHaveClass('active');
    expect(el).toHaveAttribute('aria-current', 'page');
  });

  it('should accept disabled props', () => {
    const text = faker.lorem.sentence();

    renderComponent({ children: text, disabled: true });

    const el = screen.queryByText(text);

    expect(el?.tagName).toBe('SPAN');
    expect(el).toHaveClass('disabled');
  });
});
