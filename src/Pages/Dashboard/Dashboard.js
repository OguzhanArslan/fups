import { Layout } from 'antd';

import { Data_Dashboard } from "../../Data/index"
import Header from "../../Components/Header/Header"
import FupsCarousel from "../../Components/FupsCarousel/FupsCarousel"
import FupsTable from "../../Components/FupsTable/FupsTable"

function Dashboard() {
    return (<Layout className="layout">
        <Header {...Data_Dashboard.header} />
        <FupsCarousel {...Data_Dashboard.promo} />
        <FupsTable {...Data_Dashboard.table} />
    </Layout>)
}

export default Dashboard