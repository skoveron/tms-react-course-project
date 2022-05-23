import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { authStatusSelector } from '../store';
import type { MenuModel } from './types';

export const menuItems: MenuModel[] = [
  {
    name: 'home',
    title: 'Home',
    path: '/',
    private: false,
  },
  {
    name: 'addPost',
    title: 'Add Post',
    path: '/add-post',
    private: true,
  },
  {
    name: 'posts',
    title: 'Posts',
    path: 'posts',
    private: false,
  },
  {
    name: 'login',
    title: 'Login',
    path: 'login',
    private: false,
  },
  {
    name: 'register',
    title: 'Register',
    path: 'register',
    private: false,
  },
  {
    name: 'resetPass',
    title: 'Reset Password',
    path: 'reset-password',
    private: false,
  },
];

export const useAppMenu = () => {
  const isAuth = useSelector(authStatusSelector);

  const targetMenu = useMemo(() => {
    return menuItems.filter((m) => {
      return isAuth ? m : !m.private;
    });
  }, [isAuth]);

  return {
    menu: targetMenu,
  };
};
