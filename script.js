// function to add decimal places to numbers

$.fn.digits = function () {
	return this.each(function () {
		$(this).text(
			$(this)
				.text()
				.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
		);
	});
};

// main function that iterates through once every search

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

		// ajax request to get api data

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

			// logical statements for sorting and viewing data

			if (
				$('#crypto-one').text().length > 35 && // if crypto one has data
				$('#crypto-two').text().length > 35 && // if crypto two has data
				$('#crypto-three').text().length > 35 && // if crypto three has data
				$('#crypto-four').text().length > 35 && // if crypto four has data
				$('#crypto-five').text().length == 35 // if crypto five is empty
			) {
				$('#crypto-five').insertAfter('#container div:last-child');
				var name_five = $('#crypto-five-name').text(name);
				var price_five = $('#crypto-five-price').text(price);
				var change_five = $('#crypto-five-change').text(percent + '%');
				$('#crypto-five-img').attr('src', img);
				$('#crypto-five').css('display', 'flex');
				$('#crypto-five').show();
				$('#crypto-five-img').show();
				$('#crypto-five-button').show();
			}

			if (
				$('#crypto-one').text().length > 35 && // if crypto one has data
				$('#crypto-two').text().length > 35 && // if crypto two has data
				$('#crypto-three').text().length > 35 && // if crypto three has data
				$('#crypto-four').text().length == 35 // if crypto four is empty
			) {
				$('#crypto-four').insertAfter('#container div:last-child');
				var name_four = $('#crypto-four-name').text(name);
				var price_four = $('#crypto-four-price').text(price);
				var change_four = $('#crypto-four-change').text(percent + '%');
				$('#crypto-four-img').attr('src', img);
				$('#crypto-four').css('display', 'flex');
				$('#crypto-four').show();
				$('#crypto-four-img').show();
				$('#crypto-four-button').show();
			}

			if (
				$('#crypto-two').text().length > 35 && // if crypto two has data
				$('#crypto-one').text().length > 35 && // if crypto one has data
				$('#crypto-three').text().length == 35 // if crypto three is empty
			) {
				$('#crypto-three').insertAfter('#container div:last-child');
				var name_three = $('#crypto-three-name').text(name);
				var price_three = $('#crypto-three-price').text(price);
				var change_three = $('#crypto-three-change').text(percent + '%');
				$('#crypto-three-img').attr('src', img);
				$('#crypto-three').css('display', 'flex');
				$('#crypto-three').show();
				$('#crypto-three-img').show();
				$('#crypto-three-button').show();
			}

			if (
				$('#crypto-one').text().length > 35 && // if crypto one has data
				$('#crypto-two').text().length == 35 // if crypto two is empty
			) {
				$('#crypto-two').insertAfter('#container div:last-child');
				var name_two = $('#crypto-two-name').text(name);
				var price_two = $('#crypto-two-price').text(price);
				var change_two = $('#crypto-two-change').text(percent + '%');
				$('#crypto-two-img').attr('src', img);
				$('#crypto-two').css('display', 'flex');
				$('#crypto-two').show();
				$('#crypto-two-img').show();
				$('#crypto-two-button').show();
			}

			if ($('#crypto-one').text().length == 35) {
				// if crypto one is empty
				$('#crypto-one').insertAfter('#container div:last-child');
				var name_one = $('#crypto-one-name').text(name);
				var price_one = $('#crypto-one-price').text(price);
				var change_one = $('#crypto-one-change').text(percent + '%');
				$('#crypto-one-img').attr('src', img);
				$('#crypto-one').css('display', 'flex');
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
				$('#crypto-one-img').attr('src', '');
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
				$('#crypto-two-img').attr('src', '');
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
				$('#crypto-three-img').attr('src', '');
				$('#crypto-three-button').hide();
				$('#crypto-three').hide();
			});

			$('#crypto-four-button').click(function () {
				$('#crypto-four-name')
					.contents()
					.filter(function () {
						return this.nodeType == 3;
					})
					.remove();
				$('#crypto-four-price')
					.contents()
					.filter(function () {
						return this.nodeType == 3;
					})
					.remove();
				$('#crypto-four-change')
					.contents()
					.filter(function () {
						return this.nodeType == 3;
					})
					.remove();
				$('#crypto-four-img').hide();
				$('#crypto-four-img').attr('src', '');
				$('#crypto-four-button').hide();
				$('#crypto-four').hide();
			});

			$('#crypto-five-button').click(function () {
				$('#crypto-five-name')
					.contents()
					.filter(function () {
						return this.nodeType == 3;
					})
					.remove();
				$('#crypto-five-price')
					.contents()
					.filter(function () {
						return this.nodeType == 3;
					})
					.remove();
				$('#crypto-five-change')
					.contents()
					.filter(function () {
						return this.nodeType == 3;
					})
					.remove();
				$('#crypto-five-img').hide();
				$('#crypto-five-img').attr('src', '');
				$('#crypto-five-button').hide();
				$('#crypto-five').hide();
			});

			// add code to make the values permanent until remove clicked
			// save values to cookies until removed
			console.log($('#crypto-one').text().length);
			console.log($('#crypto-two').text().length);
			console.log($('#crypto-three').text().length);
			console.log($('#crypto-four').text().length);
			console.log($('#crypto-five').text().length);
		});
	});
});
