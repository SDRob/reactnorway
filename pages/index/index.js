import React from 'react';
import { graphql } from 'react-apollo';

import Layout from 'components/layout';
import ProductGrid from 'components/product-grid';
import { H1, Header } from 'ui';
import graphSettings from './graph-settings';
import Img from '@crystallize/react-image';

import { Wrapper1, Blank, ReactDayBox, ReactIMG, DudeIMG, Outer, DateSaver, Blob1, Wrapper2, DescriptionTitle, DescriptionIMG, DescriptionText, Wrapper3, LocationTitle, LocationText, Blob2, LocationIMG, SponsorTitle, SponsorSubTitle, Wrapper4, SponsorIMG, Wrapper5, FooterText, Blob3, SpeakerWrapper, SpeakerIMG } from 'pages/index/styles.js';

class FrontPage extends React.Component {
  // Attach the graph settings to the class
  static graph = graphSettings;

  render() {
    const { router, data } = this.props;
    if (!data || data.loading) return <Layout loading />;
    return (
      <Layout router={router} title="Front page">
        <Outer>

          <Wrapper1>
            <br />
            <DudeIMG src={'static/SVGs/Dude01.svg'} />
            <ReactDayBox>
              <br />
              <ReactIMG src={'static/SVGs/React_Norway_Icon_White-01.svg'} />
              <h1>React Day Norway</h1>
              <br />
              <p>May 23rd 2019</p>
              <p>Larvik, Norway</p>
              <br />
              <DateSaver>Save the Date</DateSaver>
            </ReactDayBox>
            <br />

            <Blob1 src={'static/SVGs/Blob_background.png'} />
            <DescriptionTitle>Unleash Your Inner Warrior!</DescriptionTitle>
            <DescriptionIMG src={'static/SVGs/placeholder.png'} />
            <DescriptionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </DescriptionText>
          </Wrapper1>

          <br />

          <SponsorTitle>
            Speakers
          </SponsorTitle>
          <br />
          <SponsorSubTitle>
            Want to join the cult?
          </SponsorSubTitle>
          <br />

          <Wrapper4>
            <br />
            <SpeakerWrapper>
              <SpeakerIMG src={'static/SVGs/Hakon.jpg'} />
              <h1>Håkon Holmsen</h1>
              <p>Four times ninja warrior winner.</p>
            </SpeakerWrapper>
            <SpeakerWrapper>
              <SpeakerIMG src={'static/SVGs/Hakon.jpg'} />
              <h1>Håkon Holmsen</h1>
              <p>Four times ninja warrior winner.</p>
            </SpeakerWrapper>
            <SpeakerWrapper>
              <SpeakerIMG src={'static/SVGs/Hakon.jpg'} />
              <h1>Håkon Holmsen</h1>
              <p>Four times ninja warrior winner.</p>
            </SpeakerWrapper>
            <br /> <p />
            <SpeakerWrapper>
              <SpeakerIMG src={'static/SVGs/Hakon.jpg'} />
              <h1>Håkon Holmsen</h1>
              <p>Four times ninja warrior winner.</p>
            </SpeakerWrapper>
            <SpeakerWrapper>
              <SpeakerIMG src={'static/SVGs/Hakon.jpg'} />
              <h1>Håkon Holmsen</h1>
              <p>Four times ninja warrior winner.</p>
            </SpeakerWrapper>
            <SpeakerWrapper>
              <SpeakerIMG src={'static/SVGs/Hakon.jpg'} />
              <h1>Håkon Holmsen</h1>
              <p>Four times ninja warrior winner.</p>
            </SpeakerWrapper>
          </Wrapper4>

          <br />

          <Wrapper3>
            <Blob2 src={'static/SVGs/Blob7.png'} />
            <LocationTitle>Location</LocationTitle>
            <LocationIMG src={'static/SVGs/placeholder.png'} />
            <LocationText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas pharetra convallis posuere morbi. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Urna condimentum mattis pellentesque id nibh tortor. Quam quisque id diam vel quam elementum pulvinar etiam non.
            </LocationText>
          </Wrapper3>

          <br />

          <SponsorTitle>
            Sponsors
          </SponsorTitle>
          <br />
          <SponsorSubTitle>
            Want to work with a bunch of cool guys?
          </SponsorSubTitle>
          <br />

          <Wrapper4>
            <br />
            <SponsorIMG src={'static/SVGs/placeholder.png'} />
            <SponsorIMG src={'static/SVGs/placeholder.png'} />
            <SponsorIMG src={'static/SVGs/placeholder.png'} />
            <br /> <p />
            <SponsorIMG src={'static/SVGs/placeholder.png'} />
            <SponsorIMG src={'static/SVGs/placeholder.png'} />
            <SponsorIMG src={'static/SVGs/placeholder.png'} />
            <br />
          </Wrapper4>
          <br />

          <SponsorTitle>
            Media Sponsors
          </SponsorTitle>
          <br />

          <Wrapper4>
            <br />
            <SponsorIMG src={'static/SVGs/placeholder.png'} />
            <SponsorIMG src={'static/SVGs/placeholder.png'} />
            <SponsorIMG src={'static/SVGs/placeholder.png'} />
            <br /> <p />
            <SponsorIMG src={'static/SVGs/placeholder.png'} />
            <SponsorIMG src={'static/SVGs/placeholder.png'} />
            <SponsorIMG src={'static/SVGs/placeholder.png'} />
            <br />
          </Wrapper4>
          <br />

          <Wrapper5>
            <Blob3 src={'static/SVGs/Blob8.png'} />
            <FooterText>
              <a>Sponsership Opportunities</a> <br />
              <a>Email Us</a> <br />
              <a>Email Us</a> <br />
            </FooterText>
          </Wrapper5>
        </Outer>
      </Layout>
    );
  }
}

export default graphql(FrontPage.graph.query, FrontPage.graph)(FrontPage);
