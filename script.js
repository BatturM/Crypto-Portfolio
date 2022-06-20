console.log($('#crypto-one').text().length); // always equal to 11

$.fn.digits = function () {
	return this.each(function () {
		$(this).text(
			$(this)
				.text()
				.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
		);
	});
};

$(document).ready(function () {
	$('.search-bar').on('change', function () {
		window.value = $(this).val().toUpperCase();
		console.log(value);

		var apiKey =
			'b3f79516a7864525a6db6e9575dd26545f95613c7f828867e67eb0e98aaf2bca';
		var coinUrl =
			'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=' +
			value +
			'&tsyms=USD&api_key=' +
			apiKey;

		$.ajax({
			url: coinUrl,
			method: 'GET',
		}).then(function (response) {
			console.log(response);
			var values = Object.values(response);
			var valuesCont = Object.values(values[0]);
			var final = valuesCont[0].USD;
			var price = '$' + final.PRICE.toLocaleString();
			var percent = final.CHANGEPCT24HOUR.toFixed(2);
			var name = final.FROMSYMBOL;
			var img = 'https://www.cryptocompare.com' + final.IMAGEURL;
			console.log(name);

			if (
				$('#crypto-two').text().length > 29 &&
				$('#crypto-three').text().length == 29
			) {
				var name_three = $('#crypto-three-name').text(name);
				var price_three = $('#crypto-three-price').text(price);
				var change_three = $('#crypto-three-change').text(percent + '%');
				$('#crypto-three-img').attr('src', img);
				$('#crypto-three').show();
				$('#crypto-three-img').show();
				$('#crypto-three-button').show();
			}

			if (
				$('#crypto-one').text().length > 29 &&
				$('#crypto-two').text().length == 29
			) {
				var name_two = $('#crypto-two-name').text(name);
				var price_two = $('#crypto-two-price').text(price);
				var change_two = $('#crypto-two-change').text(percent + '%');
				$('#crypto-two-img').attr('src', img);
				$('#crypto-two').show();
				$('#crypto-two-img').show();
				$('#crypto-two-button').show();
			}

			if ($('#crypto-one').text().length == 29) {
				var name_one = $('#crypto-one-name').text(name);
				var price_one = $('#crypto-one-price').text(price);
				var change_one = $('#crypto-one-change').text(percent + '%');
				$('#crypto-one-img').attr('src', img);
				$('#crypto-one').show();
				$('#crypto-one-img').show();
				$('#crypto-one-button').show();
			}

			$('#crypto-one-button').click(function () {
				$('#crypto-one-name')
					.contents()
					.filter(function () {
						return this.nodeType == 3;
					})
					.remove();
				$('#crypto-one-price')
					.contents()
					.filter(function () {
						return this.nodeType == 3;
					})
					.remove();
				$('#crypto-one-change')
					.contents()
					.filter(function () {
						return this.nodeType == 3;
					})
					.remove();
				$('#crypto-one-img').hide();
				$('#crypto-one-button').hide();
				$('#crypto-one').hide();
			});

			$('#crypto-two-button').click(function () {
				$('#crypto-two-name')
					.contents()
					.filter(function () {
						return this.nodeType == 3;
					})
					.remove();
				$('#crypto-two-price')
					.contents()
					.filter(function () {
						return this.nodeType == 3;
					})
					.remove();
				$('#crypto-two-change')
					.contents()
					.filter(function () {
						return this.nodeType == 3;
					})
					.remove();
				$('#crypto-two-img').hide();
				$('#crypto-two-button').hide();
				$('#crypto-two').hide();
			});

			$('#crypto-three-button').click(function () {
				$('#crypto-three-name')
					.contents()
					.filter(function () {
						return this.nodeType == 3;
					})
					.remove();
				$('#crypto-three-price')
					.contents()
					.filter(function () {
						return this.nodeType == 3;
					})
					.remove();
				$('#crypto-three-change')
					.contents()
					.filter(function () {
						return this.nodeType == 3;
					})
					.remove();
				$('#crypto-three-img').hide();
				$('#crypto-three-button').hide();
				$('#crypto-three').hide();
			});

			// add code to make the values permanent until remove clicked
			// save values to cookies until removed
			console.log($('#crypto-one').text().length);
		});
	});
});
