import React from 'react';
import { SocialFooter } from 'common-ui/components/social-footer/social-footer';
import safeReactRender from 'utils/safe-react-render';

import { t } from '@lingui/macro';

import i18n from '../../../../ui/i18n';

safeReactRender(
  <SocialFooter
    socialLinks={[
      {
        href:
          '//dotnettools-support.jetbrains.com/hc/en-us/community/topics/200363899-Tracker-dotTrace',
        type: 'forum'
      },
      {
        href: '//youtrack.jetbrains.com/issues/DTRC',
        type: 'bug'
      },
      {
        href: '//blog.jetbrains.com/dotnet/',
        type: 'blog',
        text: i18n._(t`.NET Tools blog`)
      }
    ]}
    socialNetworksLinks={[
      {
        href: '//twitter.com/dottrace',
        type: 'twitter',
        text: i18n._(t`@dottrace on Twitter`)
      }
    ]}
  />,
  'social-footer'
);
