<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <link rel="stylesheet" type="text/css" href="ProductDetails.css" />
            </head>
            <body>
                <h2>Product Details</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="ProductDetail/Product">
                            <tr>
                                <td>
                                    <xsl:value-of select="ProductName" />
                                </td>
                                <td>
                                    <xsl:value-of select="ProductQuantity" />
                                </td>
                                <td>
                                    $<xsl:value-of select="ProductPrice" />
                                </td>
                            </tr>
                        </xsl:for-each>
                    </tbody>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>