<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8" />

    <!-- Template for the root element -->
    <xsl:template match="/OrderDetails">
        <html>
            <head>
                <link rel="stylesheet" type="text/css" href="OrderDetails.css" />
            </head>
            <body>
                <xsl:apply-templates />
            </body>
        </html>
    </xsl:template>

    <!-- Template for each Order -->
    <xsl:template match="Order">
        <div class="order">
            <!-- Header based on class attribute -->
            <div class="{@class}"><xsl:text> - </xsl:text>#<xsl:value-of select="@ID" /></div>

            <!-- Order details -->
            <div class="order-details">
                <p>
                    <strong>Date: </strong>
                    <xsl:value-of select="OrderDate" />
                </p>
                <p>
                    <strong>Customer Number: </strong>#<xsl:value-of select="CustomerNumber" />
                </p>
                <p><strong>Total Amount: </strong>$<xsl:value-of select="TotalAmount" /></p>
            </div>

            <!-- Product details in a table -->
            <table class="product-table">
                <thead>
                    <tr>
                        <th>Product Code</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <xsl:for-each select="Products/Product">
                        <tr>
                            <td>#<xsl:value-of select="ProductCode" /></td>
                            <td>
                                <xsl:value-of select="ProductName" />
                            </td>
                            <td>
                                <xsl:value-of select="ProductQuantity" />
                            </td>
                            <td>$<xsl:value-of select="ProductPrice" /></td>
                        </tr>
                    </xsl:for-each>
                </tbody>
            </table>
        </div>
    </xsl:template>
</xsl:stylesheet>