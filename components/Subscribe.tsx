import { useState, useRef } from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import fetcher from '../lib/fetcher';
import { Form, FormState, Subscribers } from '../lib/types';

const LoadingSpinner = () => (
  <svg
    className="w-5 h-5 text-gray-900 animate-spin"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

const ErrorMessage = ({ children }) => (
  <p className="flex items-center text-sm font-bold text-red-700 dark:text-red-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4 mr-2"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
    {children}
  </p>
);

const SuccessMessage = ({ children }) => (
  <p className="flex items-center text-sm font-bold text-green-600 dark:text-green-500">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4 mr-2"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    {children}
  </p>
);

export default function Subscribe() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef(null);
  const { data } = useSWR<Subscribers>('/api/subscribers', fetcher);
  const subscriberCount = new Number(data?.count);

  const subscribe = async (e) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: Form.Error,
        message: error
      });
      return;
    }

    inputEl.current.value = '';
    setForm({
      state: Form.Success,
      message: `Hooray! You're now on the list.`
    });
  };

  return (
    <div className="w-5/6 p-6 mx-auto my-4 bg-gray-200 rounded md:w-full md: dark:bg-gray-skills">
      <p className="text-lg font-semibold text-gray-900 md:text-xl dark:text-gray-100">
        Subscribe to the newsletter
      </p>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Get updates on weekly blog posts, research I've done, and more. Delivered
        once a month. Unsubscribe anytime.
      </p>
      <form className="relative my-4" onSubmit={subscribe}>
        <input
          ref={inputEl}
          aria-label="Email for newsletter"
          placeholder="elon@musk.com"
          type="email"
          autoComplete="email"
          required
          className="block w-full px-4 py-2 pr-32 mt-1 text-gray-900 bg-white border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-[#2B2B2B] dark:text-gray-100"
        />
        <button
          className="absolute flex items-center justify-center h-8 px-4 pt-1 font-medium text-gray-900 bg-gray-100 rounded right-1 top-1 dark:bg-[#4c4c4c] dark:text-gray-100 w-28"
          type="submit"
        >
          {form.state === Form.Loading ? <LoadingSpinner /> : 'Subscribe'}
        </button>
      </form>
      {form.state === Form.Error ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === Form.Success ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        <p className="text-sm text-gray-800 dark:text-gray-200">
          {`${
            subscriberCount > 0 ? subscriberCount.toLocaleString() : '-'
          } subscribers – `}
          <a href="https://buttondown.email/saurish/archive">1 issue</a>
        </p>
      )}
    </div>
  );
}
