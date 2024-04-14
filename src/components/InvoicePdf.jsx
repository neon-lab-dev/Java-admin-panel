import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import right from "../assets/images/Vector 129.png";
import left from "../assets/images/Vector 130.png";
import logo from "../assets/images/logo.png";
import invoice from "../assets/images/Invoice.png";
import line from "../assets/images/Line 46.png";
import language from "../assets/images/language.png";
import call from "../assets/images/call.png";
import mail from "../assets/images/mail.png";
import interRegularFont from "../assets/fonts/Inter-Regular.ttf";

// Register font
Font.register({
  family: "Inter",
  src: interRegularFont,
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FAFAFA",
    fontFamily: "Inter",
  },
  section: {
    display: "flex",
    gap: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgRight: {
    width: 290,
    height: 60,
  },
  imgLeft: {
    height: 55,
    width: 350,
  },
  body: {
    paddingHorizontal: 50,
    paddingVertical: 30,
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    height: 75,
    width: 175,
  },
  logoText: {
    height: 35,
    width: 90,
    objectFit: "contain",
    objectPosition: "center",
  },
  line: {
    height: 1,
    width: "100%",
  },
  orderDetailsText: {
    fontSize: 14,
    fontWeight: 400,
  },
  customerDetailsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  customerDetailsView: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    textAlign: "left",
  },
  customerDetailsViewRight: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    textAlign: "right",
    alignItems: "flex-end",
  },
  customerDetailsHeading: {
    fontSize: 16,
    fontWeight: 600,
  },
  customerDetailsText: {
    fontSize: 13,
    fontWeight: 500,
  },
  table: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 6,
    width: 500,
    marginTop: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  tableHeader: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "rgba(233, 39, 64, 0.75)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 16,
    color: "white",
    fontWeight: 600,
  },
  table1stRow: {
    width: 200,
  },
  tableOtherRows: {
    width: 100,
    alignItems: "center",
  },
  tableLastRow: {
    width: 100,
    alignItems: "flex-end",
  },
  tableLastBody: {
    width: 100,
    alignItems: "center",
  },
  tableBody: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    color: "black",
    fontSize: 14,
  },
  thankYou: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  thankYouText: {
    fontSize: 14,
    fontWeight: 400,
  },
  thankYouDesc: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    width: 200,
    padding: 6,
    backgroundColor: "#FFFFFF",
  },
  thankYouDescText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  thankYouDescTextBold: {
    fontWeight: 700,
    fontSize: 17,
  },
  thankYouDescTextNormal: {
    fontWeight: 400,
    fontSize: 12,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    fontSize: 12,
    fontWeight: 500,
  },
  footerTextContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  footerImg: {
    height: 14,
    width: 14,
  },
});

const InvoicePdf = ({ data }) => {
  const hostname = window.location.hostname;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src={left} style={styles.imgLeft} />
          <Image src={right} style={styles.imgRight} />
        </View>
        <View style={styles.body}>
          <View style={styles.header}>
            <Image src={logo} style={styles.logo} />
            <Image src={invoice} style={styles.logoText} />
          </View>
          <Image src={line} style={styles.line} />
          <View style={styles.header}>
            <Text style={styles.orderDetailsText}>
              Order Id: {data?.order?._id}
            </Text>
            <Text style={styles.orderDetailsText}>
              Date: {new Date(data?.order?.paidAt).toLocaleDateString()}
            </Text>
          </View>
          <Image src={line} style={styles.line} />
          <View style={styles.customerDetailsContainer}>
            <View style={styles.customerDetailsView}>
              <Text style={styles.customerDetailsHeading}>
                Customer Details
              </Text>
              <Text style={styles.customerDetailsText}>
                Name: {data?.userDetails?.name}
              </Text>
              <Text style={styles.customerDetailsText}>
                Email: {data?.userDetails?.email}
              </Text>
              <Text style={styles.customerDetailsText}>
                Address: {data?.order?.shippingInfo?.landmark},{" "}
                {data?.order?.shippingInfo?.address},{" "}
                {data?.order?.shippingInfo?.city}, <br />
                {data?.order?.shippingInfo?.state},{" "}
                {data?.order?.shippingInfo?.pinCode}
              </Text>
            </View>
            <View style={styles.customerDetailsViewRight}>
              <Text style={styles.customerDetailsHeading}>Payment Details</Text>
              <Text style={styles.customerDetailsText}>Payment Id:</Text>
              <Text style={styles.customerDetailsText}>
                {data?.order?.razorpay_payment_id}
              </Text>
            </View>
          </View>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={styles.table1stRow}>Product</Text>
              <Text style={styles.tableOtherRows}>Quantity</Text>
              <Text style={styles.tableOtherRows}>Price</Text>
              <Text style={styles.tableLastRow}>Total</Text>
            </View>
            {data?.order?.orderItems?.map((item, i) => (
              <View style={styles.tableBody} key={i}>
                <Text style={styles.table1stRow}>{item?.name}</Text>
                <Text style={styles.tableOtherRows}>{item?.quantity}</Text>
                <Text style={styles.tableOtherRows}>
                  {"\u20B9"} {item?.price}
                </Text>
                <Text style={styles.tableLastBody}>
                  {"\u20B9"} {Number(item?.quantity) * Number(item?.price)}
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.thankYou}>
            <Text style={styles.thankYouText}>Thank you for your business</Text>
            <View style={styles.thankYouDesc}>
              <View style={styles.thankYouDescText}>
                <Text style={styles.thankYouDescTextBold}>Sub Total: </Text>
                <Text style={styles.thankYouDescTextNormal}>
                  {"\u20B9"}{" "}
                  {data?.order?.orderItems?.reduce((acc, item) => {
                    return acc + Number(item.price) * Number(item.quantity);
                  }, 0)}
                </Text>
              </View>
              <View style={styles.thankYouDescText}>
                <Text style={styles.thankYouDescTextBold}>Tax(0%): </Text>
                <Text style={styles.thankYouDescTextNormal}>{"\u20B9"} 0</Text>
              </View>
              <View style={styles.thankYouDescText}>
                <Text style={styles.thankYouDescTextBold}>Grand Total: </Text>
                <Text style={styles.thankYouDescTextNormal}>
                  {"\u20B9"}{" "}
                  {data?.order?.orderItems?.reduce((acc, item) => {
                    return acc + Number(item.price) * Number(item.quantity);
                  }, 0)}
                </Text>
              </View>
            </View>
          </View>
          <Image src={line} style={styles.line} />
          <View style={styles.footer}>
            <View style={styles.footerTextContainer}>
              <Image src={language} style={styles.footerImg} />
              <Text>{hostname}</Text>
            </View>
            <View style={styles.footerTextContainer}>
              <Image src={call} style={styles.footerImg} />
              <Text>+91 933 421 9079</Text>
            </View>
            <View style={styles.footerTextContainer}>
              <Image src={mail} style={styles.footerImg} />
              <Text>service.javasports@gmail.com</Text>
            </View>
          </View>
          <Image src={line} style={styles.line} />
        </View>
      </Page>
    </Document>
  );
};
export default InvoicePdf;
