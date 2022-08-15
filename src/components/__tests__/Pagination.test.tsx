import { fireEvent, render, screen } from '@testing-library/react';
import Pagination, { Props } from '../Pagination';

describe('<Pagination />', () => {
  const renderComponent = (props: Props) => render(<Pagination {...props} />);

  it('should render nav element', () => {
    renderComponent({
      currentPage: 1,
      lastPage: 5,
      maxLength: 7,
      setCurrentPage: jest.fn(),
    });

    const navEl = screen.queryByLabelText('Pagination');
    const navElChildTextContents = [
      'Previous',
      '1',
      '2',
      '3',
      '4',
      '5',
      'Next',
    ];

    expect(navEl?.tagName).toBe('NAV');
    expect(navEl?.childElementCount).toBe(navElChildTextContents.length);

    navElChildTextContents.forEach((textContent, idx) => {
      expect(navEl?.childNodes[idx]).toHaveTextContent(textContent);
    });
  });

  it('should render ellipsis', () => {
    renderComponent({
      currentPage: 5,
      lastPage: 10,
      maxLength: 7,
      setCurrentPage: jest.fn(),
    });

    const navEl = screen.queryByLabelText('Pagination');
    const navElChildTextContents = [
      'Previous',
      '1',
      '...',
      '4',
      '5',
      '6',
      '...',
      '10',
      'Next',
    ];

    expect(navEl?.childElementCount).toBe(navElChildTextContents.length);

    navElChildTextContents.forEach((textContent, idx) => {
      expect(navEl?.childNodes[idx]).toHaveTextContent(textContent);
    });
  });

  it('should handle PageLink on click', () => {
    const setCurrentPageMock = jest.fn();
    const currentPage = 5;
    const btnItems = [
      {
        text: 'Previous',
        pageNum: currentPage - 1,
      },
      {
        text: 'Next',
        pageNum: currentPage + 1,
      },
      {
        text: '4',
        pageNum: 4,
      },
    ];

    renderComponent({
      currentPage,
      lastPage: 10,
      maxLength: 7,
      setCurrentPage: setCurrentPageMock,
    });

    expect(setCurrentPageMock).not.toBeCalled();

    btnItems.forEach(({ text, pageNum }) => {
      const btnEl = screen.queryByText(text) as HTMLElement;

      fireEvent.click(btnEl);

      expect(setCurrentPageMock).toBeCalledTimes(1);
      expect(setCurrentPageMock).toBeCalledWith(pageNum);

      setCurrentPageMock.mockClear();
    });
  });
});
