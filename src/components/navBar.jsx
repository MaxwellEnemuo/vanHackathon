import React from 'react';
import logo from '../../src/vh_logo.svg';
import max from '../../src/maxwell.jpg';
import { NavLink } from 'react-router-dom';
import '../../src/App.css';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';


const navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* <div className="d-flex justify-content-center"> */}
            <NavLink to="/"><img src={logo} className="" alt="logo" /></NavLink>
            <NavLink className="navbar-brand m-2" to="/jobs">Jobs</NavLink>
            <NavLink className="navbar-brand m-2" to="/events">Events</NavLink>
            <NavLink className="navbar-brand m-2" to="/jobs-pipeline">Jobs Pipeline</NavLink>
            <NavLink className="navbar-brand m-2" to="/slack">Slack</NavLink>
            <NavLink className="navbar-brand m-2" to="/referral">Referral</NavLink>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login"></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/content"></NavLink>
                    </li>
                </ul>
                <Box display="flex" className="m-2">
                    <Box m={1} style={{ cursor:'pointer' }}>
                        <StyledBadge2 overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} variant="dot">
                            <Avatar alt="maxwell avatar" src={max} />
                        </StyledBadge2>
                    </Box>
                </Box>
            </div>
          {/* </div> */}
        </nav>
        );
}
 
export default navbar;


const StyledBadge2 = withStyles(theme => ({
  badge: {
    backgroundColor: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid #44b700',
      content: '""'
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

