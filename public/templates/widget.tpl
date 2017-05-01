<p>This plugin requires an API key from https://battlefieldtracker.com/</p>
<p>You can find out more about the API and how to get an API key <a href="https://battlefieldtracker.com/site-api" target="_blank">here</a></p>
<p>You can get your server id by searching for your server name <a href="https://battlefieldtracker.com/bf1/servers?platform=pc" target="_blank">here</a>.  Just copy the string of numbers in the url after you've browsed to your servers page.</p>
<br/>
TRN-Api-Key: <input type="text" class="form-control" name="apikey" placeholder="Enter API Key from Battlefield Tracker API" />
<br/>
Server Id: <input type="text" class="form-control" name="severid" placeholder="Enter server id from battlefieldtracker.com" />
<br/>
<div class="form-group">
  <label for="sel1">Platform:</label>
  <select class="form-control" name="platform">
    <option value="PC">PC</option>
    <option value="PS4">PS4</option>
    <option value="XBOX">XBOX</option>
  </select>
</div>
<br/><br/>
<p>This widget uses the <a href="https://battlefieldtracker.com/" target="_blank">Battlefield Tracker Network</a> and <a href="https://www.npmjs.com/package/battlefield-stats">battlefield-stats</a> library by <a href="https://www.npmjs.com/~mattmcfarland" target="_blank">mattmcfarland</a></p>
