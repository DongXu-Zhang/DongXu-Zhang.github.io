# Homepage assets

The original avatar and XJTU emblem remain in `images/`. The homepage now uses
`images/thu-emblem.svg` for the Tsinghua emblem and raster fallbacks rendered from
that vector for favicons, the Apple touch icon, and the web manifest.

## Tsinghua emblem

- Vector source: https://github.com/mattandryc/thu-cs-crest-svg/blob/master/thu-crest.svg
- Source repository identifies the original university asset as
  `http://www.tsinghua.edu.cn/publish/thu2018/images/logo.svg`.
- Official reference used to check the emblem:
  https://vi.tsinghua.edu.cn/gk/xxbz/xh/bzjbzsy.htm
- The downloaded vector and derived PNGs retain the source's GPL-3.0 license;
  the complete license is included at `images/thu-emblem-LICENSE.txt`.

## Education and research institution logos

The logos keep their original colors and proportions. Images downloaded for this
layout are stored without changing the artwork; CSS controls their display sizes.
The same institution asset is reused for education and research experience.

| Institution | Local file | Source / official reference |
| --- | --- | --- |
| Tsinghua University | `images/thu-emblem.svg` | See the source and license above. |
| Xi'an Jiaotong University | `images/XJTU_emblem.svg` | Existing repository asset; checked against https://www.xjtu.edu.cn/jdgk/xxbs.htm |
| Taiyuan University of Technology | `images/institutions/tyut-emblem.jpg` | https://www.tyut.edu.cn/__local/3/CE/C1/B23BD5E11CC416EDD7AB78C50DA_3DE5AEBE_54AB3.jpg, from https://www.tyut.edu.cn/xxgk1/xxbs/xh.htm |
| Shanghai AI Laboratory | `images/institutions/shlab-logo.png` | https://www.shlab.org.cn/static/asset/img/share-logo.png, the official homepage's share image |
| Institute of Automation, CAS | `images/institutions/casia-emblem.jpg` | https://ia.cas.cn/gkjj/xxbs/201010/W020101028581223717789.jpg, from https://ia.cas.cn/gkjj/xxbs/ |
| Synced | `images/institutions/synced-logo.png` | https://syncedreview.com/wp-content/uploads/2017/08/cropped-screen-shot-2017-08-01-at-2-02-47-pm.png, the icon referenced by https://syncedreview.com/ |

## Publication figures

These are the authors' existing public figures retained from the earlier layout.
The current homepage displays publications as a text list without figures or
resource links. The files and their sources remain available for maintenance.

| Local file | Public source |
| --- | --- |
| `images/publications/intern-atlas.png` | https://arxiv.org/html/2604.28158v2/intro.png |
| `images/publications/vict.png` | https://arxiv.org/html/2608.28128v2/figures/intro.png |
| `images/publications/v-skip.png` | https://dongxu-zhang.github.io/v-skip.github.io/static/images/fig1.png |
| `images/publications/coficot.png` | https://arxiv.org/html/2603.08251v1/fig1.png |
| `images/publications/pointcot.png` | https://dongxu-zhang.github.io/PointCoT.github.io/static/images/motivation.png |

## Updating content

- `_pages/about.md`: introduction and page structure.
- `_data/profile.yml`: profile and incoming Ph.D. advisor details.
- `_data/publications.yml`: papers, author order, contribution markers, and links.
  `display_order` controls the plain publication list. All entries are visible,
  and stored resource links are not rendered. `publication_name` records the formal
  venue when the display label is abbreviated.
- `_data/news.yml`: updates in display order; the first seven are visible by default.
  Acceptance entries reference a paper ID so titles, venues, and sentence structure
  remain consistent with the publication data.
- `_data/projects.yml`: project dates, roles, repository links, and descriptions.
- `_data/background.yml`: education, research experience, awards, and talks.
- `_data/institutions.yml`: shared institution logos, referenced by the education
  and research experience entries in `_data/background.yml`.
- `_data/navigation.yml`: navigation labels and anchors.
- `assets/css/academic.css`: visual design and responsive layouts.
- `assets/js/academic.js`: mobile navigation, section highlighting, and deep links.

The site remains a Jekyll/GitHub Pages project. Build with `bundle exec jekyll
build` in a supported Ruby environment. Build output goes to the ignored `_site/`
directory. The avatar and institution logos are stored locally, so rendering the
main content does not depend on third-party image hosts.
