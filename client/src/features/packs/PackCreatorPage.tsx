import { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { theme } from "styles/theme";
import { Topbar } from "features/packs/components/Topbar";
import { Sidebar } from "features/packs/components/Sidebar";
import { ScenePreview } from "features/packs/components/ScenePreview";

import { PackCreatorPagePackQuery } from "./__generated__/PackCreatorPagePackQuery";

export const PackCreatorPage = () => {
  const [saving, setSaving] = useState(false);
  const { packId } = useParams<{ packId: string }>();
  const { data, refetch } = useQuery<PackCreatorPagePackQuery>(PACK_QUERY, {
    variables: {
      packId: packId || "",
    },
  });

  const selectScene = (selectedSceneId: string) => {
    const newVariables = {
      packId,
      sceneId: selectedSceneId,
    };
    refetch(newVariables);
  };

  if (!data || !data.pack) {
    return null;
  }

  return (
    <Page>
      <Topbar pack={data.pack} saving={saving} setSaving={setSaving} />
      <SidebarLeft>
        <Sidebar
          pack={data.pack}
          selectedSceneId={data.scene?.id}
          selectScene={selectScene}
          refetch={refetch}
          setSaving={setSaving}
        />
      </SidebarLeft>
      <Content>
        <Screen>
          {data?.scene && (
            <ScenePreview scene={data.scene} setSaving={setSaving} />
          )}
        </Screen>
      </Content>
      <SidebarRight />
      <Footer />
    </Page>
  );
};

const PACK_QUERY = gql`
  query PackCreatorPagePackQuery($packId: ID!, $sceneId: ID) {
    pack(id: $packId) {
      ...TopbarPackFragment
      ...SidebarPackFragment
    }
    scene(id: $sceneId, packId: $packId) {
      ...ScenePreviewFragment
    }
    questionTypes {
      id
      slug
    }
    answerTypes {
      id
      slug
    }
  }
  ${Topbar.fragments.pack}
  ${Sidebar.fragments.pack}
  ${ScenePreview.fragments.scene}
`;

export const Page = styled.section`
  height: var(--vh, 100vh);
  display: grid;
  background: ${theme.ui.backgroundGrey};
  grid-template-areas:
    "header  header  header header"
    "sidebarL content content sidebarR"
    "sidebarL  footer  footer sidebarR";
  grid-template-columns: 215px 1fr 1fr 100px;
  grid-template-rows: 50px 1fr 50px;
`;

const SidebarLeft = styled.section`
  grid-area: sidebarL;
  display: grid;
  grid-template-rows: max-content auto max-content;
  height: 100%;
  border-right: 1px solid ${theme.ui.borderColor};
`;

export const Content = styled.section`
  grid-area: content;
  padding: ${theme.spacings(7)};
`;

const Screen = styled.section`
  text-align: center;
  background-color: ${theme.ui.background};
  padding: ${theme.spacings(5)};
  width: 100%;
  border: 2px solid ${theme.ui.borderColor};
  border-radius: ${theme.ui.borderWavyRadius};
  /* screen - top - padding - footer - padding */
  height: calc(100vh - 50px - 40px - 50px - 16px);
  overflow: auto;
`;

const SidebarRight = styled.section`
  grid-area: sidebarR;
  padding: ${theme.spacings(3)};
  height: 100%;
`;

const Footer = styled.footer`
  grid-area: footer;
  display: flex;
  padding: ${theme.spacings(4)};
`;
