import React from "react";
import BannerPage from "../../components/molecules/BannerPage";
import Greating from "../../components/organisms/Greating/Greating";
import History from "../../components/organisms/History/History";
import ListLembaga from "../../components/organisms/ListLembaga";
import VisiMisi from "../../components/organisms/VisiMisi";
import Layouts from "../../Layout";

const ProfilPage = () => {
  return (
    <Layouts>
      <BannerPage title="Profil" />
      <Greating />
      <VisiMisi />
      <History />
      <ListLembaga />
    </Layouts>
  );
};

export default ProfilPage;
