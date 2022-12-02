import {Component} from 'react'
import {
  NavLink,
  SidebarContainer,
  NavLinksList,
  NavLinkItem,
  SocialContainer,
  ImageContainer,
  Desc,
  LogosImage,
} from './styledComponents'
import VideoContext from '../../context/VideoContext'

class Sidebar extends Component {
  //   state = {
  //     isActive: false,
  //   }

  //   isHomeActive = () => {
  //     this.setState({isActive: true})
  //   }

  render() {
    return (
      <VideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          /* const {isActive} = this.state */

          const bgColor = isDarkTheme ? '#000000' : '#ffffff'
          const linkcolor = isDarkTheme ? '#ffffff' : '#000000'

          /* const activeTab = isActive ? 'blue' : null */

          return (
            <SidebarContainer bgColor={bgColor}>
              <NavLinksList>
                <NavLinkItem onClick={this.isHomeActive}>
                  <NavLink linkcolor={linkcolor} to="/">
                    Home
                  </NavLink>
                </NavLinkItem>

                <NavLinkItem>
                  <NavLink linkcolor={linkcolor} to="/trending">
                    Trending
                  </NavLink>
                </NavLinkItem>
                <NavLinkItem>
                  <NavLink linkcolor={linkcolor} to="/gaming">
                    Gaming
                  </NavLink>
                </NavLinkItem>
                <NavLinkItem>
                  <NavLink linkcolor={linkcolor} to="/saved-videos">
                    Saved Videos
                  </NavLink>
                </NavLinkItem>
              </NavLinksList>

              <SocialContainer>
                <Desc linkcolor={linkcolor}> Contact Us</Desc>
                <ImageContainer>
                  <LogosImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <LogosImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <LogosImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ImageContainer>
                <Desc linkcolor={linkcolor}>
                  Enjoy! Now to see your channels and recommendations!
                </Desc>
              </SocialContainer>
            </SidebarContainer>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}
export default Sidebar
