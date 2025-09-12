import PropTypes from "prop-types";

export default function ApiAlert({ onSwitchMock }) {
  return (
    <section className="apiAlert">
      <p>
        L’API est indisponible. <br />
        Voulez-vous utiliser les données mockées ?
      </p>
      <button onClick={onSwitchMock}>Activer les données mockées</button>
    </section>
  );
}

ApiAlert.propTypes = {
  onSwitchMock: PropTypes.func.isRequired,
};
