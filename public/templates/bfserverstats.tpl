<link rel="stylesheet" type="text/css" href="/plugins/nodebb-widget-bfserver-stats/public/css/style.css">
<div class="bfserver-stats" role="main">
	<h5 class="serverName">
    {serverInfo.name}: <br/>
    <small>{serverInfo.description}</small>
  </h5>
	<div class="mapImage">
		<img class="currentMap img-thumbnail" src="{activityInfo.mapImageUrl}" />
	</div>
	<div>
		<table class="table small stats">
			<tbody class="">
				<tr>
					<td class="text-left">Mode:</td>
					<td class="text-right">{activityInfo.currentMode}</td>
				</tr>
				<tr>
					<td class="text-left">Map:</td>
					<td class="text-right">{activityInfo.currentMap}</td>
				</tr>
				<tr>
					<td class="text-left">Soldiers:</td>
					<td class="text-right">{slots.Soldier.current} / {slots.Soldier.max}</td>
				</tr>
				<tr>
					<td class="text-left">Spectators:</td>
					<td class="text-right">{slots.Spectator.current} / {slots.Spectator.max}</td>
				</tr>
				<tr>
					<td class="text-left">Queue:</td>
					<td class="text-right">{slots.Queue.current} / {slots.Queue.max}</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
