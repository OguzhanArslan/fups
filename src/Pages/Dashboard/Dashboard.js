import { Layout } from 'antd';

import { Data_Dashboard } from "../../Data/index"
import FupsHeader from "../../Components/FupsHeader/FupsHeader"
import FupsCarousel from "../../Components/FupsCarousel/FupsCarousel"
import FupsTable from "../../Components/FupsTable/FupsTable"
import FupsBanner from '../../Components/FupsBanner/FupsBanner';

function Dashboard({isLogin, setLogin}) {
    return (<Layout className="layout">
        <FupsHeader {...Data_Dashboard.header} isLogin={isLogin} setLogin={setLogin} />
        <FupsCarousel {...Data_Dashboard.promo} />
        <FupsTable {...Data_Dashboard.table} />
        <FupsBanner {...Data_Dashboard.banner} />
    </Layout>)
}

export default Dashboard