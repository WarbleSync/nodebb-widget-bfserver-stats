<link rel="stylesheet" type="text/css" href="/plugins/nodebb-widget-bfserver-stats/public/css/style.css">
<div class="bfserver-stats" role="main">
	<h4 class="serverName">
    {serverInfo.name} <br/>
    <small>{serverInfo.description}</small>
  </h4>
	<div class="mapImage">
		<img class="currentMap img-thumbnail" src="{activityInfo.mapImageUrl}" />
	</div>
	<dl class="dl-horizontal text-right stats small">
		<dt>Mode:</dt>
		<dd>{activityInfo.currentMode}</dd>
		<dt>Map:</dt>
		<dd>{activityInfo.currentMap}</dd>
		<dt>Soldier Slots:</dt>
		<dd>{slots.Soldier.current} / {slots.Soldier.max}</dd>
		<dt>Spectator Slots:</dt>
		<dd>{slots.Spectator.current} / {slots.Spectator.max}</dd>
		<dt>Queue:</dt>
		<dd>{slots.Queue.current} / {slots.Queue.max}</dd>
	</dl>
</div>
