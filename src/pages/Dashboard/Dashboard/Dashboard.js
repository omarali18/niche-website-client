import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../../Hooks/useAuth';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import AddReview from '../AddReview/AddReview';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Admin from '../Admin/Admin';
import AddProduct from '../AddProduct/AddProduct';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import MenegeReviews from '../MenegeReviews/MenegeReviews';

const drawerWidth = 240;
function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

const Dashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const { handleLogout, admin } = useAuth()

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to="/home">
                <ListItem button >
                    <ListItemIcon >
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ color: "rgb(47, 47, 47)" }} primary="Home" />
                </ListItem>
            </Link>
            {!admin && <Box>
                <Link to={`${url}`}>
                    <ListItem button >
                        <ListItemIcon >

                        </ListItemIcon>
                        <ListItemText sx={{ color: "rgb(47, 47, 47)" }} primary="Add Review" />
                    </ListItem>
                </Link>

                <Link to={`${url}/myOrder`}>
                    <ListItem button >
                        <ListItemIcon >

                        </ListItemIcon>
                        <ListItemText sx={{ color: "rgb(47, 47, 47)" }} primary="My Order" />
                    </ListItem>
                </Link>

                <Link to={`${url}/payment`}>
                    <ListItem button >
                        <ListItemIcon >

                        </ListItemIcon>
                        <ListItemText sx={{ color: "rgb(47, 47, 47)" }} primary="Pay Now" />
                    </ListItem>
                </Link>
            </Box>}
            {admin && <Box>
                <Link to={`${url}/admin`}>
                    <ListItem button >
                        <ListItemIcon >

                        </ListItemIcon>
                        <ListItemText sx={{ color: "rgb(47, 47, 47)" }} primary="Create Admin" />
                    </ListItem>
                </Link>

                <Link to={`${url}/addProduct`}>
                    <ListItem button >
                        <ListItemIcon >

                        </ListItemIcon>
                        <ListItemText sx={{ color: "rgb(47, 47, 47)" }} primary="Add Product" />
                    </ListItem>
                </Link>
                <Link to={`${url}/menegeReview`}>
                    <ListItem button >
                        <ListItemIcon >

                        </ListItemIcon>
                        <ListItemText sx={{ color: "rgb(47, 47, 47)" }} primary="Menege Review" />
                    </ListItem>
                </Link>
            </Box>}

            <Link onClick={handleLogout} to="/login">
                <ListItem button >
                    <ListItemIcon >
                        <i className="fas fa-sign-out-alt"></i>
                    </ListItemIcon>
                    <ListItemText sx={{ color: "rgb(47, 47, 47)" }} primary="logout" />
                </ListItem>
            </Link>





        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        BD CAR SELLER
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <AddReview />
                    </Route>
                    <Route path={`${path}/myorder`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <AdminRoute path={`${path}/admin`}>
                        <Admin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct />
                    </AdminRoute>
                    <AdminRoute path={`${path}/menegeReview`}>
                        <MenegeReviews />
                    </AdminRoute>
                </Switch>


            </Box>
        </Box>
    );
};

export default Dashboard;