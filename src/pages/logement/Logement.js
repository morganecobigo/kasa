import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Collapse from "../../components/collapse/Collapse";
import Carousel from "../../components/fichlogement/carousel/Carousel";
import Fichlogement from "../../components/fichlogement/Fichlogement";
import Host from "../../components/fichlogement/host/Host";
import Star from "../../components/fichlogement/star/Star";
import Tags from "../../components/fichlogement/tags/Tags";
import logements from "../../data/logements.json";
import "./logement.css";

const Logement = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const activeLogement = logements.find((lgt) => lgt.id === id);
    if (!activeLogement) {
      return navigate("/error");
    } else {
      setLogement(activeLogement);
      setLoading(false);
    }
  }, [id, navigate]);
  return loading ? (
    <div>loading...</div>
  ) : (
    <>
      <Carousel pictures={logement.pictures} />
      <Fichlogement title={logement.title} location={logement.location} />
      <Tags tags={logement.tags} />
      <Host name={logement.host.name} picture={logement.host.picture} />
      <Star score={logement.rating} />
      <div className="collapse_container">
        <div className="logement_collapse">
          <Collapse title={`Description`} text={logement.description} />
        </div>
        <div className="logement_collapse">
          <Collapse title={`Équipements`} text={logement.equipments} />
        </div>
      </div>
    </>
  );
};

export default Logement;
