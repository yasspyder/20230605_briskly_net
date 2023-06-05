import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div
      className="position-absolute top d-flex justify-content-center align-items-center"
      style={{ top: 0, right: 0, bottom: 0, left: 0 }}
    >
      <div className="card p-3" style={{ width: 500 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
