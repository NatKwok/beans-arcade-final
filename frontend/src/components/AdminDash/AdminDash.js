import './App.css';
import UserTable from './components/UserTable';
import { Button } from '@mui/material';

function AdminDash() {
  return (
    <div>
            <div className="nav">
        <Button variant="outlined" className="button">Home</Button>
        <Button variant="outlined" className="button">Logout</Button>
      </div>
      <UserTable />
    </div>
    
  )
}

export default AdminDash;
