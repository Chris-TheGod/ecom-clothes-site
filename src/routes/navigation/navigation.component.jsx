import { Link, Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <div>Logo</div>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
