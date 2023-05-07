import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from './utils/test-utils';

import App from './App';

describe('renders the landing page', () => {
  // Tests that the function renders without errors.
  test('test_renders_without_errors', () => {
    const { getByTestId } = renderWithProviders(<App />);
    expect(getByTestId('app-entry')).toBeInTheDocument();
  });

  // Tests that the loadingStack has one or more items, and the Spin component is spinning.
  test('test_loading_stack_not_empty', () => {
    renderWithProviders(<App />, {
      preloadedState: {
        ui: {
          loaderStack: [true, true, true]
        }
      }
    });
    expect(screen.getByTestId('spin-component')).toHaveClass(
      'ant-spin-spinning'
    );
  });

  // Tests that the Spin component displays the correct tip message.
  test('test_spin_tip_message', () => {
    renderWithProviders(<App />, {
      preloadedState: {
        ui: {
          loaderStack: [true, true, true]
        }
      }
    });
    expect(screen.getByText('loading')).toBeInTheDocument();
  });

  // Tests that the loadingStack is empty, and the Spin component is not spinning.
  test('test_loading_stack_empty', () => {
    renderWithProviders(<App />, {
      preloadedState: {
        ui: {
          loaderStack: []
        }
      }
    });
    expect(screen.getByTestId('spin-component')).not.toHaveClass(
      'ant-spin-spinning'
    );
  });
});
