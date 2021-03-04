const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );

module.exports = {
  entry: { index: path.resolve( __dirname, 'src', 'javascripts/index.js' ) },
  output: {
    path: path.resolve( __dirname, 'build' ),
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      },
    ]
  },
  optimization: {
    splitChunks: { chunks: 'all' }
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin( {
      template: path.resolve( __dirname, 'src', 'index.html' )
    } )
  ],
};
