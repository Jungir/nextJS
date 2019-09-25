import Header from "./header";
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};
//no need for props.children when using header, links
//but if u want to apply to the entire component, make the border all the way round then we need
//props.children
const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
