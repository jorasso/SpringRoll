/**
 * @module EaselJS Display
 * @namespace createjs
 * @requires Core
 */
(function(undefined)
{
	// Try to include MovieClip, movieclip with CreateJS is 
	// an optional library from easeljs. We should try to 
	// include it and silently fail if we don't have it
	var MovieClip = include('createjs.MovieClip', false);

	if (!MovieClip) return;

	/**
	 * Mixins for the CreateJS MovieClip class
	 * @class MovieClip
	 */
	var p = MovieClip.prototype;

	/**
	 * Combines gotoAndStop and cache in createjs to cache right away
	 * @method gotoAndCache
	 * @param {String|int} [frame=0] The 0-index frame number or frame label
	 * @param {int} [buffer=15] The space around the nominal bounds to include in cache image
	 */
	p.gotoAndCache = function(frame, buffer)
	{
		frame = (frame === undefined) ? 0 : frame;
		buffer = (buffer === undefined) ? 15 : buffer;
		if (this.timeline)
		{
			this.gotoAndStop(frame);
		}
		var bounds = this.nominalBounds;
		this.cache(
			bounds.x - buffer,
			bounds.y - buffer,
			bounds.width + (buffer * 2),
			bounds.height + (buffer * 2),
			1
		);
	};

}());