import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false); // state to control dropdown visibility

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Handle logout logic here
  };

  const loggedIn = true;

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">
      <span style={{ color: "#007BFF", fontWeight: "bold", fontSize: "30px" }}>
          CO<span style={{ color: "#000000" }}>Learn</span>Space
        </span>
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/create-learning-space/">
            Create Learning Space
          </NavLink>
        </NavItem>
        {loggedIn ? (
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret direction="start">
              <img
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                alt="User profile"
                className="rounded-circle"
                style={{ width: "30px", marginRight: "10px" }}
              />
            </DropdownToggle>
            <DropdownMenu style={{ right: "auto", left: 0 }} direction="left">
              <DropdownItem href="/profile" onClick={() => navigate("profile")}>
                View Profile
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        ) : (
          <NavItem>
            <NavLink href="/login">Log In</NavLink>
          </NavItem>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
