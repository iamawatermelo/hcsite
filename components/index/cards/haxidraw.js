import CardModel from './card-model'
import { Box, Flex, Grid, Text } from 'theme-ui'
import Buttons from './button'

/** @jsxImportSource theme-ui */

export default function Haxidraw({ stars }) {
  return (
    <CardModel
      github_link="https://github.com/hackclub/blot/"
      color="white"
      sx={{
        backgroundSize: 'cover',
        backgroundColor: '#95C9E5',
        backgroundImage: `linear-gradient(120deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0, 0.4) 70%), url('https://hc-cdn.hel1.your-objectstorage.com/s/v3/764459ac9485116803a1e3fe6cb395363d542b74_43_51b0002299b44eecb22657dfc9635c127c542d5b_0image.webp')`
      }}
      position={[null, 'bottom', 'bottom']}
      highlight="#2b27f8d9"
      filter="brightness(0.8)"
      stars={stars}
    >
      <Text variant="title" as="h3" sx={{ fontSize: ['36px', 4, 5] }}>
        Blot
      </Text>
      <Grid columns={[1, 2]}>
        <Box>
          <Text
            as="p"
            variant="subtitle"
            sx={{ zIndex: 2, position: 'relative' }}
          >
            Blot is an open source drawing machine and online editor, designed
            to be a fun and beginner friendly introduction to digital
            fabrication and generative art.
          </Text>
        </Box>
        <Box>
          <Flex sx={{ flexDirection: 'column', mt: [3, 3, 4] }}>
            <Buttons
              id="51"
              icon="align-left"
              link="https://blot.hackclub.dev"
              primary="rgba(255, 255, 255, 0.9)"
              sx={{ color: 'black' }}
            >
              Learn more
            </Buttons>
            <Buttons
              id="52"
              icon="code"
              link="https://blot.hackclub.dev/editor"
              primary="rgba(255, 255, 255, 0.9)"
              sx={{ color: 'black' }}
            >
              Create something in the editor
            </Buttons>
            <Buttons
              id="54"
              icon="slack"
              link="/slack"
              overrideColor="rgba(255, 255, 255, 0.7)"
              sx={{ color: 'black' }}
            >
              Share your creations and chat on Slack
            </Buttons>
          </Flex>
        </Box>
      </Grid>
    </CardModel>
  )
}
