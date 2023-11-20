import Head from 'next/head';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CompanyCard } from 'src/sections/companies/company-card';
import { CompaniesSearch } from 'src/sections/companies/companies-search';

const companies = [
  {
    id: '2569ce0d517a7f06d3ea1f24',
    createdAt: '27/03/2019',
    description: 'Meta Platforms, Inc., doing business as Meta, and formerly named Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California. The company owns and operates Facebook, Instagram, Threads, and WhatsApp, among other products and services.',
    logo: '/assets/logos/Facebook_Logo_2023.png',
    title: 'Meta (Facebook)',
    downloads: '594' 
  },
  {
    id: 'ed2b900870ceba72d203ec15',
    createdAt: '31/03/2019',
    description: 'Instagram is an American photo and video sharing social networking service owned by Meta Platforms. It allows users to upload media that can be edited with filters, be organized by hashtags, and be associated with a location via geographical tagging. Posts can be shared publicly or with preapproved followers.',
    logo: '/assets/logos/Instagram_log.png',
    title: 'Instagram',
    downloads: '625'
  },
  {
    id: 'a033e38768c82fca90df3db7',
    createdAt: '03/04/2019',
    description: 'Telegram Messenger, commonly known as Telegram, is an encrypted, cloud-based, cross-platform instant messaging service. It was originally launched for iOS on 14 August and Android in October 2013.',
    logo: '/assets/logos/Telegram_logo.svg.webp',
    title: 'Telegram',
    downloads: '857'
  },
  {
    id: '1efecb2bf6a51def9869ab0f',
    createdAt: '04/04/2019',
    description: 'TikTok, whose mainland Chinese counterpart is Douyin, is a short-form video hosting service owned by ByteDance. It hosts user-submitted videos, which can range in duration from 3 seconds to 10 minutes. Since their launches, TikTok and Douyin have gained global popularity. ',
    logo: '/assets/logos/tiktok-icon-free-png.webp',
    title: 'TikTok',
    downloads: '406'
  },
  {
    id: '1ed68149f65fbc6089b5fd07',
    createdAt: '04/04/2019',
    description: 'YouTube is an online video sharing and social media platform headquartered in San Bruno, California, United States. Accessible worldwide, it was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim. It is owned by Google and is the second most visited website in the world, after Google Search.',
    logo: '/assets/logos/youtube-logo-youtube-icon-transparent-free-png.webp',
    title: 'YouTube',
    downloads: '835'
  },
  {
    id: '5dab321376eff6177407e887',
    createdAt: '04/04/2019',
    description: 'WhatsApp is a freeware, cross-platform, centralized instant messaging and voice-over-IP service owned by United States tech conglomerate Meta Platforms. It allows users to send text, voice messages and video messages, make voice and video calls, and share images, documents, user locations, and other content.',
    logo: '/assets/logos/whatsapp-logo-whatsapp-logo-transparent-whatsapp-icon-transparent-free-free-png.webp',
    title: 'WhatsApp',
    downloads: '835'
  },
  {
    id: '5dab321376eff6177407e887',
    createdAt: '04/04/2019',
    description: 'Twitter, Inc. was an American social media company based in San Francisco, California. The company operated the social networking service Twitter and previously the Vine short video app and Periscope livestreaming service.',
    logo: '/assets/logos/twitter-logo-twitter-logo-transparent-twitter-icon-transparent-free-free-png.webp',
    title: 'Twitter',
    downloads: '835'
  }
];

const Page = () => (
  <>
    <Head>
      <title>
       Aloqalar | MIA ear
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
        <Stack spacing={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
          >
            <Stack spacing={1}>
              <Typography variant="h4">
               Kontaktlar
              </Typography>
              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
              >
                <Button
                  color="inherit"
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <ArrowUpOnSquareIcon />
                    </SvgIcon>
                  )}
                >
                  Yuklab olish
                </Button>
                <Button
                  color="inherit"
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <ArrowDownOnSquareIcon />
                    </SvgIcon>
                  )}
                >
                  Dasturga yuklash
                </Button>
              </Stack>
            </Stack>
            <div>
            
            </div>
          </Stack>
          <CompaniesSearch />
       
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
         
          </Box>
        </Stack>
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
