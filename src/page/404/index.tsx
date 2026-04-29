import { Button, Empty, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function NotFound(){
  const token = useSelector((state: any) => state.authSlice.token)
    return (
      <div style={{marginTop:"100px"}}> 
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          imageStyle={{ height: 60 }}
          description={
            <Typography.Text>
              温馨提示 <a href="#">页面走丢啦</a>
            </Typography.Text>
          }
        >
        <Button type="primary">
          <Link to={token ? "/dashboard" : "/login"}>回到首页</Link>
        </Button>
        </Empty>
      </div>
    )
}

export default NotFound