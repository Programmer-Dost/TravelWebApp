import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap,SidebarRoute } from "./SidebarElements"
const Sidebar = ({isOpen, toggle}) => {
  return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to = "about" onClick={toggle}>About</SidebarLink>
            <SidebarLink to = "Discover" onClick={toggle}>Discover</SidebarLink>
            <SidebarLink to = "services" onClick={toggle}>services</SidebarLink>
            <SidebarLink to = "signup" onClick={toggle}>signup</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to ="/signin">Sign In</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
  )
}

export default Sidebar
