import { BiSearch } from "react-icons/bi";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink, Route, Routes } from "react-router-dom";
import Dashboard1 from "../../Pages/Dashboard1";
import Dashboard2 from "../../Pages/Dashboard2";
import Futter from "../Futter";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import Forget from "../../Pages/ForgetPassword";
import Faq from "../../Pages/Faq";
import Chat from "../../Pages/Chat";
import MailBox from "../../Pages/MailBox";
import { Dropdown } from "rsuite";
import Buttons from "../../Pages/Buttons";
import DropDown from "../../Pages/DropDown";
import Badges from "../../Pages/Badges";
import Loading from "../../Pages/Loading";
import { DropdownButton, DropdownItem } from "react-bootstrap";
import Not from "../../Pages/Not";
import Progeress from "../../Pages/Progress";
import Carusel from "../../Pages/Carusel";
import Cards from "../../Pages/Cards";
import Pagination from "../../Pages/Pagination";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <div className="p-9 flex flex-col">
        <div>
          <img
            src="https://demo.dashboardpack.com/hospital-html/img/logo.png"
            alt=""
          />
        </div>
        <div className="mt-12 flex flex-col gap-12">
          <div>
            <div>
              <p
                style={{ fontFamily: "rajdhani, sans-serif" }}
                className="text-[#43BCC2] font-bold text-[20px]"
              >
                Dashboard
              </p>
            </div>
            <Dropdown className="mt-3" title="Dashboard">
              <div className="px-7">
                <Dropdown.Item>
                  <div className="w-full mt-2">
                    <NavLink
                      style={{}}
                      to={"/"}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "flex gap-4 items-center text-[14px] text-[#43BCC2]"
                          : "text-black flex gap-5 text-[14px] items-center"
                      }
                    >
                      <span>Dashboard1</span>
                    </NavLink>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item className="mt-4">
                  <div className="w-full">
                    <NavLink
                      style={{}}
                      to={"/dashboard"}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "flex gap-4 items-center text-[14px] text-[#43BCC2]"
                          : "text-black flex gap-5 text-[14px] items-center"
                      }
                    >
                      <span>Dashboard2</span>
                    </NavLink>
                  </div>
                </Dropdown.Item>
              </div>
            </Dropdown>
            <div className="mt-3">
              <p
                style={{ fontFamily: "rajdhani, sans-serif" }}
                className="text-[#43BCC2] font-bold text-[20px]"
              >
                Apilcation
              </p>
            </div>
            <Dropdown className="mt-3" title="Pages">
              <div className="mt-2 px-7">
                <Dropdown.Item>
                  <div className="w-full">
                    <NavLink
                      style={{}}
                      to={"/login"}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "flex gap-4 items-center text-[14px] text-[#43BCC2]"
                          : "text-black flex gap-5 text-[14px] items-center"
                      }
                    >
                      <span>Login</span>
                    </NavLink>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item>
                  <div className="w-full mt-4">
                    <NavLink
                      style={{}}
                      to={"/regis"}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "flex gap-4 items-center text-[14px] text-[#43BCC2]"
                          : "text-black flex gap-5 text-[14px] items-center"
                      }
                    >
                      <span>Register</span>
                    </NavLink>
                  </div>
                  <div className="w-full mt-4">
                    <NavLink
                      style={{}}
                      to={"/for"}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "flex gap-4 items-center text-[14px] text-[#43BCC2]"
                          : "text-black flex gap-5 text-[14px] items-center"
                      }
                    >
                      <span>Forget</span>
                    </NavLink>
                  </div>
                </Dropdown.Item>
              </div>
            </Dropdown>
            <Dropdown className="mt-3" title="Apilcations">
              <div className="mt-2 px-7">
                <Dropdown.Item>
                  <div className="w-full">
                    <NavLink
                      style={{}}
                      to={"/chat"}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "flex gap-4 items-center text-[14px] text-[#43BCC2]"
                          : "text-black flex gap-5 text-[14px] items-center"
                      }
                    >
                      <span>Chat</span>
                    </NavLink>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item>
                  <div className="w-full mt-4">
                    <NavLink
                      style={{}}
                      to={"/box"}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "flex gap-4 items-center text-[14px] text-[#43BCC2]"
                          : "text-black flex gap-5 text-[14px] items-center"
                      }
                    >
                      <span>Mail Box</span>
                    </NavLink>
                  </div>
                  <div className="w-full mt-4">
                    <NavLink
                      style={{}}
                      to={"/faq"}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "flex gap-4 items-center text-[14px] text-[#43BCC2]"
                          : "text-black flex gap-5 text-[14px] items-center"
                      }
                    >
                      <span>Faq</span>
                    </NavLink>
                  </div>
                </Dropdown.Item>
              </div>
            </Dropdown>

            <div className="mt-3">
              <p
                style={{ fontFamily: "rajdhani, sans-serif" }}
                className="text-[#43BCC2] font-bold text-[20px]"
              >
                Components
              </p>
            </div>
            <Dropdown className="mt-3" title="UI Components">
              <Dropdown.Item>
                <div class="dropdown">
                  <button class="dropbtn">Elemnts</button>
                  <div class="dropdown-content">
                    <div className="w-full">
                      <NavLink
                        style={{}}
                        to={"/buttt"}
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "flex gap-4 items-center text-[14px] text-[#43BCC2]"
                            : "text-black flex gap-5 text-[14px] items-center"
                        }
                      >
                        <span>Buttons</span>
                      </NavLink>
                    </div>
                    <div className="w-full">
                      <NavLink
                        style={{}}
                        to={"/drop"}
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "flex gap-4 items-center text-[14px] text-[#43BCC2]"
                            : "text-black flex gap-5 text-[14px] items-center"
                        }
                      >
                        <span>Dropdowns</span>
                      </NavLink>
                    </div>
                    <div className="w-full">
                      <NavLink
                        style={{}}
                        to={"/badges"}
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "flex gap-4 items-center text-[14px] text-[#43BCC2]"
                            : "text-black flex gap-5 text-[14px] items-center"
                        }
                      >
                        <span>Badges</span>
                      </NavLink>
                    </div>
                    <div className="w-full">
                      <NavLink
                        style={{}}
                        to={"/load"}
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "flex gap-4 items-center text-[14px] text-[#43BCC2]"
                            : "text-black flex gap-5 text-[14px] items-center"
                        }
                      >
                        <span>Loading</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div class="dropdown mt-2">
                  <button className="dropbtn">Components</button>
                  <div className="dropdown-content">
                    <div className="w-full">
                      <NavLink
                        style={{}}
                        to={"/not"}
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "flex gap-4 items-center text-[14px] text-[#43BCC2]"
                            : "text-black flex gap-5 text-[14px] items-center"
                        }
                      >
                        <span>Notifaction</span>
                      </NavLink>
                    </div>
                    <div className="w-full">
                      <NavLink
                        style={{}}
                        to={"/progress"}
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "flex gap-4 items-center text-[14px] text-[#43BCC2]"
                            : "text-black flex gap-5 text-[14px] items-center"
                        }
                      >
                        <span>Progress bar</span>
                      </NavLink>
                    </div>
                    <div className="w-full">
                      <NavLink
                        style={{}}
                        to={"/carusel"}
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "flex gap-4 items-center text-[14px] text-[#43BCC2]"
                            : "text-black flex gap-5 text-[14px] items-center"
                        }
                      >
                        <span>Carusels</span>
                      </NavLink>
                    </div>
                    <div className="w-full">
                      <NavLink
                        style={{}}
                        to={"/cards"}
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "flex gap-4 items-center text-[14px] text-[#43BCC2]"
                            : "text-black flex gap-5 text-[14px] items-center"
                        }
                      >
                        <span>Cards</span>
                      </NavLink>
                    </div>
                    <div className="w-full">
                      <NavLink
                        style={{}}
                        to={"/pag"}
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "flex gap-4 items-center text-[14px] text-[#43BCC2]"
                            : "text-black flex gap-5 text-[14px] items-center"
                        }
                      >
                        <span>Pagination</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </Dropdown.Item>
            </Dropdown>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          backgroundColor: "white",
          height: "100px",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { md: "none" },
              color: "black",
              marginTop: "20px",
            }}
          >
            <MenuIcon />
          </IconButton>
          <div className="flex items-center mt-3 justify-between w-full">
            <div className="xl:w-[32%] w-[50%]">
              <div className="md:flex hidden gap-4 items-center px-8 w-[100%] rounded-3xl bg-[#F5F7FD] ">
                <BiSearch color="black" size={"23px"} />
                <input
                  placeholder="Search hero...."
                  className=" p-[15px] bg-transparent outline-none placeholder:text-black text-black"
                  type="text"
                />
              </div>
            </div>
            <div className="text-black">
              <div className="flex md:gap-9 gap-2">
                <img
                  src="https://demo.dashboardpack.com/hospital-html/img/icon/bell.svg"
                  alt=""
                />
                <img
                  src="https://demo.dashboardpack.com/hospital-html/img/icon/msg.svg"
                  alt=""
                />
                <img
                  src="https://demo.dashboardpack.com/hospital-html/img/client_img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "#EFF1F7",
        }}
      >
        <Toolbar />
        <Box sx={{ marginTop: "40px", backgroundColor: "#EFF1F7" }}>
          <Routes>
            <Route path="/" element={<Dashboard1 />} />
            <Route path="/dashboard" element={<Dashboard2 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/regis" element={<Register />} />
            <Route path="/for" element={<Forget />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/box" element={<MailBox />} />
            <Route path="/buttt" element={<Buttons />} />
            <Route path="/drop" element={<DropDown />} />
            <Route path="/badges" element={<Badges />} />
            <Route path="/load" element={<Loading />} />
            <Route path="/not" element={<Not />} />
            <Route path="/progress" element={<Progeress />} />
            <Route path="/carusel" element={<Carusel />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/pag" element={<Pagination />} />
          </Routes>
          <Futter />
        </Box>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
