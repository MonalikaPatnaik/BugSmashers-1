import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import bangle from '../images/lehengaa.jpg';
import Typography from '@mui/material/Typography';
import { useAuth0 } from '@auth0/auth0-react';

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  // Check if authentication is in progress
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Check if the user is authenticated
  return (
    <>
      {isAuthenticated && (
        <div>
          <Row className='profileContainer'>
            <Col
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src={user.picture} alt='user' className='profilePic' />
            </Col>
            <Col md={6}>
              <Typography variant='h4'>Name: {user.nickname}</Typography>
              <Typography variant='h5'>Mail Id: {user.email}</Typography>
            </Col>
          </Row>

          <div className='Shops'>
            <h1>My Shops</h1>
            <div className='items'>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader title="Kirti's Shop" />
                <CardMedia sx={{ height: 200 }} image={bangle} />
                <CardContent>
                  <CardActions>
                    <Button size='small' color='white'>
                      <Link to='/item' color='white'>
                        Add Item
                      </Link>{' '}
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
