import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewBudget } from 'src/sections/overview/overview-budget';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { OverviewLatestProducts } from 'src/sections/overview/overview-latest-products';
import { OverviewSales } from 'src/sections/overview/overview-sales';
import { OverviewTasksProgress } from 'src/sections/overview/overview-tasks-progress';
import { OverviewTotalCustomers } from 'src/sections/overview/overview-total-customers';
import { OverviewTotalProfit } from 'src/sections/overview/overview-total-profit';
import { OverviewTraffic } from 'src/sections/overview/overview-traffic';

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>
        Bosh sahifa | MIA E-SPY
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewBudget
              difference={12}
              positive
              sx={{ height: '100%' }}
              value="24000"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalCustomers
              difference={16}
              positive={false}
              sx={{ height: '100%' }}
              value="1600"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTasksProgress
              sx={{ height: '100%' }}
              value={75.5}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalProfit
              sx={{ height: '100%' }}
              value="15000"
            />
          </Grid>
          <Grid
            xs={12}
            lg={8}
          >
            <OverviewSales
              chartSeries={[
                {
                  name: "Kuzatuvda",
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                },
                {
                  name: "Yakunlangan",
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewTraffic
              chartSeries={[22, 33, 15, 40]}
              labels={['Telegram', 'Instagram', 'Facebook', 'Youtube']}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewLatestProducts
              products={[
                {
                  id: '1209619850',
                  image: '/assets/user-img/abdulbosit.jpg',
                  updatedAt: subDays(subHours(now, 7), 1).getTime(),
                  email: 'uzdev7@gmail.com',
                  name: 'Tuychiev Abdulbosit',
                  phone: '+998(99)999-23-34',
                  userName: "abdulbosit_tatu"
                },
                {
                  id: '6455096428',
                  address: {
                    city: 'Atlanta',
                    country: 'USA',
                    state: 'Georgia',
                    street: '1865  Pleasant Hill Road'
                  },
                  image: '/assets/user-img/sherzodbek.jpg',
                  updatedAt: subDays(subHours(now, 1), 0).getTime(),
                  email: '1qw3er5ty8@gmail.com',
                  name: "Niymatov Sherzodbek",
                  phone: '+998(99)101-56-69',
                  userName: "niymatov97"
                },
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={12}
            lg={8}
          >
            <OverviewLatestOrders
              orders={[
                {
                  id: 'f69f88012978187a6c12897f',
                  ref: 'DEV1049',
                  amount: 30.5,
                  customer: {
                    name: 'Tuychiev Abdulbosit'
                  },
                  createdAt: 1555016400000,
                  status: 'yangi',
                  image: '/assets/user-img/abdulbosit.jpg',
                },
                {
                  id: '9eaa1c7dd4433f413c308ce2',
                  ref: 'DEV1048',
                  amount: 25.1,
                  customer: {
                    name: 'Niymatov Sherzodbek'
                  },
                  createdAt: 1700016400000,
                  status: 'jarayonda',
                  image: '/assets/user-img/sherzodbek.jpg',
                },
                {
                  id: '9eaa1c7dd4433f413c308ce2',
                  ref: 'DEV1048',
                  amount: 25.1,
                  customer: {
                    name: 'Davronbek Boltayev'
                  },
                  createdAt: 1555016400000,
                  status: 'yakunlangan',
                  image: '/assets/user-img/davron.jpg',
                },
                {
                  id: '9eaa1c7dd4433f413c308ce2',
                  ref: 'DEV1048',
                  amount: 25.1,
                  customer: {
                    name: 'Farrukh Kamilov'
                  },
                  createdAt: 1555016400000,
                  status: 'bekorqilingan',
                  image: '/assets/user-img/farux.jpg',
                },
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
