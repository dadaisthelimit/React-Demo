const HeaderAlerts = () => {
	  return (
	<div className="header-alerts">
	  <div className="header-alerts__item">
		<span className="header-alerts__item-icon">
		  <i className="fas fa-bell"></i>
		</span>
		<span className="header-alerts__item-text">Alerts</span>
	  </div>
	  <div className="header-alerts__item">
		<span className="header-alerts__item-icon">
		  <i className="fas fa-envelope"></i>
		</span>
		<span className="header-alerts__item-text">Messages</span>
	  </div>
	</div>
  );
}

export default HeaderAlerts;